const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  name: String,
  description: String,
  github: String,
	image: String
});


// naming the collection and schema to be used
const Work = mongoose.model("Work", WorkSchema);

module.exports = Work;
