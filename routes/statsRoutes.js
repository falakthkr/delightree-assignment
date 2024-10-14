const express = require("express");
const { getStatsByAgeRange } = require("../controllers/statsController");
const router = express.Router();

router.get("/age-range", getStatsByAgeRange);

module.exports = router;
