// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const Schema = mongoose.Schema;

const TrailsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  distance: {
    type: Boolean,
    required: int
  },
  completed: {
    type: Boolean,
    required: true
  },
  dateCompleted: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Trails", TrailsSchema);