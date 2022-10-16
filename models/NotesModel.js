const mongoose = require("mongoose");

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = mongoose.Schema({
  noteTitle: String,
  noteDescription: String,
  priority: String,
  dateAdded: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
});

//creating model from schema
module.exports = mongoose.model("note", noteSchema);
