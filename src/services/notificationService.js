const Notification = require("../models/notificationModel");
const { v4: uuidv4 } = require("uuid"); // Import the uuid library

async function generateUniqueCode() {
  // Generate a unique code using uuid
  const uniqueCode = uuidv4();

  return uniqueCode;
}

async function createNotification(senderName) {
  const uniqueCode = await generateUniqueCode();

  const notification = new Notification({
    senderName,
    uniqueCode,
  });

  // Save the notification to the database.
  await notification.save();

  return notification;
}

module.exports = {
  createNotification,
};
