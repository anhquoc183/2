const authorController = require("../controllers/authorController");


const router  = require("express").Router();

//add 
router.post("/", authorController.addAuthor);
//get all author
router.get("/",authorController.getAllAuthor)
//get an author
router.get("/:id",authorController.getAnAuthor);
//update
router.put("/:id",authorController.updateAuthor);
//DELETE
router.delete("/:id",authorController.deleteAuthor);
module.exports = router;