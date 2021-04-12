const express = require("express");
const router = express.Router();
const path = require('path');
const os = require('os');
const fs = require('fs');

// Node.js doesn't have a built-in multipart/form-data parsing library.
// Instead, we can use the 'busboy' library from NPM to parse these requests.
const Busboy = require('busboy');
const Speech = require('@google-cloud/speech');

const ENCODING = 'LINEAR16';
const SAMPLE_RATE_HERTZ = 41000;
const LANGUAGE = 'en-US';

const audioConfig = {
    encoding: ENCODING,
    sampleRateHertz: SAMPLE_RATE_HERTZ,
    languageCode: LANGUAGE,
};

const convertToText = (file, config) => {
    console.log('FILE:', JSON.stringify(file));

    const audio = {
        content: fs.readFileSync(file).toString('base64'),
    };

    const request = {
        config,
        audio,
    };

    const speech = new Speech.SpeechClient();

    return speech.recognize(request).then((response) => {
        return response;
    }).catch((error) => {
        console.log('SPEECH error:', error);
    });
};

/**
 * Audio-to-Text is a Cloud Function that is triggered by an HTTP
 * request. The function processes one audio file.
 *
 * @param {object} req Cloud Function request context.
 * @param {object} res Cloud Function response context.
 */
router.post("/", (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).end();
    }
    
    const file = req.files.file;
    const filename = req.files.file.name;

    console.log(file);
    console.log(filename);

    console.log("开始");
    console.log(__dirname);

    let tempPath = "../uploads/" + filename;
    const busboy = new Busboy({ headers: req.headers });

    const p = busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        const saveTo = path.join('../uploads/' + filename);
        tempPath = saveTo;
        file.pipe(fs.createWriteStream(saveTo));

        const promise = new Promise((resolve, reject) => {
            file.on('end', () => {
                writeStream.end();
            });
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });
        return promise;
    });

    console.log(p);
      
    busboy.on('finish', function() {
        p.then(() => {
            convertToText(tempPath, audioConfig).then((response) => {
                const transcript = response[0].results
                    .map(result => result.alternatives[0].transcript)
                    .join('\n');
                res.send({ transcript });
            });
            fs.unlinkSync(tempPath);
        });
        // res.writeHead(200, { 'Connection': 'close' });
        // res.end("That's all folks!");
    });
          
    busboy.end(req.rawBody);   

    // const busboy = new Busboy({ headers: req.headers });
    // const tmpdir = os.tmpdir();

    // console.log(tmpdir);

    // let tmpFilePath;
    // let fileWritePromise;

    // // Process the file
    // busboy.on('file', (fieldname, file, filename) => {
    //     // Note: os.tmpdir() points to an in-memory file system on GCF
    //     // Thus, any files in it must fit in the instance's memory.
    //     console.log('File [' + fieldname + ']: filename: ' + filename);
    //     // const filepath = path.join(tmpdir, filename);
    //     const filepath = path.join('/Users/jingzhengsong/Downloads/Backend/uploads', filename);
    //     tmpFilePath = filepath;

    //     const writeStream = fs.createWriteStream(filepath);
    //     file.pipe(writeStream);

    //     // File was processed by Busboy; wait for it to be written to disk.
    //     const promise = new Promise((resolve, reject) => {
    //         file.on('end', () => {
    //             writeStream.end();
    //         });
    //         writeStream.on('finish', resolve);
    //         writeStream.on('error', reject);
    //     });
    //     fileWritePromise = promise;
    //     console.log("done");
    // });

    // // Triggered once the file is processed by Busboy.
    // // Need to wait for the disk writes to complete.

    // busboy.on('finish', () => {
    //     fileWritePromise.then(() => {
    //         convertToText(tmpFilePath, audioConfig).then((response) => {
    //             const transcript = response[0].results
    //                 .map(result => result.alternatives[0].transcript)
    //                 .join('\n');
    //             res.send({ transcript });
    //         });
    //         fs.unlinkSync(tmpFilePath);
    //     });
    // });

    // busboy.end(req.rawBody);
});

router.get("/", (req, res) => {
    res.send("aaa");
})

module.exports = router;
