const express = require("express");
const {
  getAllDonations,
  getAllRequests,
  getAllUsers,
} = require("../controllers/metrics.controller");
const router = express.Router();

router.get("/donations", getAllDonations);

router.get("/requests", getAllRequests);

router.get("/users", getAllUsers);

module.exports = router;
