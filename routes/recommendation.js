const express = require("express");
const router = express.Router();

const listingsStore = require("../store/listings");
// const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");

router.get("/", (req, res) => {
  const listings = listingsStore.filterListings(
    listing => listing.price <= req.query.budget
  );
  console.log(listings);
  const resources = listings.map(listingMapper);
  res.send(resources);
});

module.exports = router;
