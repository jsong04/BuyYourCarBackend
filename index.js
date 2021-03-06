const express = require("express");
const categories = require("./routes/categories");
const listings = require("./routes/listings");
const filteredListings = require('./routes/filteredListings');
const listing = require("./routes/listing");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const recommendation = require("./routes/recommendation");
const my = require("./routes/my");
const messages = require("./routes/messages");
const search = require('./routes/search');
const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const bodyParser = require('body-parser');
const formidableMiddleware = require('express-formidable');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(formidableMiddleware());

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/filteredListings", filteredListings);
app.use("/api/listings", listings);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);
app.use("/api/search", search);
app.use("/api/recommendation", recommendation);

const port = process.env.PORT || config.get("port");
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});
