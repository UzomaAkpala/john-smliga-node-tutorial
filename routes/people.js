const express = require("express");
let { people } = require("../data");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
