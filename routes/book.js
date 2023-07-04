const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add
router.post("/",bookController.addBook);
//get
router.get("/",bookController.getABook);
//getonebook
router.get("/:id",bookController.getOneBook);
//update
router.put("/:id",bookController.updateBook);
//delete
router.delete("/:id",bookController.deleteBook);
module.exports = router;