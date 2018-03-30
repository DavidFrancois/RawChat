const io = require('socket.io')();
const message_controller = require('../controllers/messages')

io.on('connection', (socket) => {

  socket.on('new_message', (message) => {
    message_controller.message_create(message);
    io.emit('add_latest_message', message);
  });

  socket.on('get_all_messages', () => {
    socket.emit('send_all_messages', message_controller.get_all_messages());
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  });
});

module.exports = io;