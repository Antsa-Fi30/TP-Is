const express = require("express");
const PersonController = require("../controller/PersonController");
const router = express.Router();

router.get("/", PersonController.list);
