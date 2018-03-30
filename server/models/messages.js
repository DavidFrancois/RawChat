const SchemaObject = require('schema-object');

var Message = new SchemaObject({
  author: String,
  text: String,
  date: Date,
  readers: [String]
});

module.exports = Message;