const router = require("express").Router();
const controller = require("../../controllers");

router
  .route("/portfolio")
  .get(controller.findAll)
  .post(controller.create);


module.exports = router;
