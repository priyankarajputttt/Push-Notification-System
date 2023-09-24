const notificationService = require("../services/notificationService");

async function respondToNotification(req, res) {
  try {
    const { action, senderName } = req.body;
    let uniqueCode = "";

    if (action === "Accept") {
      // If the action is 'Accept', create a notification and generate a unique code.
      const notification = await notificationService.createNotification(
        senderName
      );
      uniqueCode = notification.uniqueCode;
      res.json({
        isSuccess: true,
        senderName,
        message: "Notification Accepted",
        uniqueCode,
      });
    }else{
   // In case of 'Decline', do nothing but respond with a success message.
   res.status(200).json({ isSuccess: true,senderName, message: "Notification Declined" });
    }
 
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: `Internal server error: ${JSON.stringify(error)}` });
  }
}

module.exports = {
  respondToNotification,
};
