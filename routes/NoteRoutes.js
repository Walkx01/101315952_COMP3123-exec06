const noteModel = require("../models/NotesModel.js");
const express = require("express");
const mongoose = require("mongoose");
const app = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

/*
{
"noteTitle": "Note1",
  "noteDescription": "this is my first note",
  "priority": "high"
}

*/
app.post("/notes", async (req, res) => {
  try {
    const newNote = new noteModel(req.body);
    const note = await newNote.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send.apply(error);
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get("/notes/:noteId", async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.noteId);
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put("/notes/:noteId", async (req, res) => {
  try {
    const note = await noteModel.findByIdAndUpdate(req.params.noteId, req.body);
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete("/notes/:noteId", async (req, res) => {
  try {
    const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId);
    if (!deletedBook) res.status(400).send({ message: "no note to delete" });
    res.status(201).send(deletedNote);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
