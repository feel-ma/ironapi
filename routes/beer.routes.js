// routes/project.routes.js

const router = require("express").Router();

// const mongoose = require("mongoose");

const Beer = require("../models/Beer.model");
const Creator = require("../models/Creator.model");

//  POST /api/projects  -  Creates a new project
router.post("/beer", (req, res, next) => {
  const { title, description ,creator } = req.body;

  Beer.create({ title, description, creator })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router;
