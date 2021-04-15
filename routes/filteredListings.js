const express = require("express");
const router = express.Router();

const store = require("../store/listings");
// const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");

router.get("/", (req, res) => {
  // const listing = store.getListing(parseInt(req.params.id));
  console.log(req.query);
  if (req.query.name) {
      const listings = store.filterListings(listing => listing.title.indexOf(req.query.name) != -1);
      console.log(listings);
      const resources = listings.map(listingMapper);
      res.send(resources);
    } else {
        res.end();
    }
});

module.exports = router;
