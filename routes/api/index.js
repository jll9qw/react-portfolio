const router = require("express").Router();
const controller = require("../../controllers");

// Matches with "/api/herbs/"
router
  .route("/portfolio")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/herbs/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

// Matches with "/api/herbs/search/:term"
router.route("/search/:query").get(controller.searchByTerm);

module.exports = router;
