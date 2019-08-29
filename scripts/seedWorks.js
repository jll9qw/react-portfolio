const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

const seedWorks = [
     
    {
      
      "name": "urbit",
      "image": "client/src/assets/images/urbit_logo.png",
      "github": "https://github.com/jll9qw/urbit-app",
      "description": "A holistic wellness full stack application with a customized API"
    },
    {
      "name": "Albumize",
      "image": "",
      "github": "https://github.com/jll9qw/AlbumReviewBlog.git",
      "description": "A full stack blog website utilizing sequelize, materialize, and Spotifiy "
    },
    {
      "name": "BucketList",
      "image": "",
      "github": "https://github.com/jll9qw/BucketList.git",
      "description": "A 'To-Do' list application utlizing a firebase database, local storage, and Google Maps API"
    },
    {
      "name": "MySQL app",
      "image": "",
      "github": "https://github.com/jll9qw/mysql-node-app",
      "description": "A backend merchant store web application using a MySQL database"
    },
    {
      "name": "Liri-Bot",
      "image": "",
      "github": "https://github.com/jll9qw/liri-node-app",
      "description": "A server-side application using Node.js and axios to obtain responses from Spotify, BandsInTown, and IMDB"
    }
  ];
  db.Work.remove({})
  .then(() => db.Work.collection.insertMany(seedWorks))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });