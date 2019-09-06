const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  res.json({ API: "API is working" });
});

router.post("/emp", async (req, res) => {
  const empObj = req.body;
  const response = {};
  try {
    await db.query("INSERT INTO employee SET ?", [empObj]);
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      response.err = "This employee already exists in the Database";
    } else {
      console.log(err.code);
      response.err = "Your Request could not be completed: DATABASE ERROR";
    }
  }
  response.suc = `${empObj.firstname} 
  ${empObj.lastname} has successfully been added to the Database`;
  res.send(response);
});

module.exports = router;
