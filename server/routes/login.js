const express = require("express");
const router = express.Router();
const { auth } = require("../controllers/login");


router.use(express.json());
router.use(express.text());

router.post("/login", auth);

module.exports = router;