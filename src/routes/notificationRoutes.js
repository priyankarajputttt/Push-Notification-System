const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const validateRequest = require("../validator/validator");
const notificationCreate = require("../schemas/notificationSchema");

// POST route for the '/respond-notification' endpoint.
router.post(
  "/respond-notification",
  validateRequest(notificationCreate, "body"),
  notificationController.respondToNotification
);

module.exports = router;
