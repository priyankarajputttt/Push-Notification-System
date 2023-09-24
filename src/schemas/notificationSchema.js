const Joi = require("joi");
const notificationCreate = Joi.object({
  senderName: Joi.string().required(),
  action: Joi.string().valid("Accept", "Decline").required(),
});

module.exports = notificationCreate;
