const Message = require('../models/messages');
const io = require('../io');

// Dirty, used because I do not implement a database yet
var messages = [];

exports.message_create = (message) => {
  var msg = new Message(message);
  messages.push(msg);
};

// Gives easy access to messages w/o allowing modification
exports.get_all_messages = () => {
  return messages;
};