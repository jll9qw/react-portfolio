const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  github: String,
	image: String
});


// naming the collection and schema to be used
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
