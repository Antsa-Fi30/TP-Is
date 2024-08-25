const express = require("express");
const router = express.Router();

router.get("/tweet", (req, res) => {
  const str = [
    {
      name: "I.D",
      msg: "Dream",
      username: "Imagine Dragons",
    },
  ];
  res.end(JSON.stringify(str));
});

router.post("/addTweet", (req, res) => {
  res.end("NA");
});

module.exports = router;
