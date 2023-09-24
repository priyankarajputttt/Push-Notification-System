const mongoose = require("mongoose");

// Define a new schema for the Notification model.
const notificationSchema = new mongoose.Schema({
  senderName: String,
  uniqueCode: String,
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
