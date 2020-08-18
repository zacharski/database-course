require("dotenv").config();
const argon2 = require("argon2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var Pool = require("pg").Pool;
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "logger",
};

app.post("/login", async (req, res) => {
  console.log("LOGIN ", req.body);
  const username = req.body.username;
  const password = req.body.password;
  try {
    const query =
      "SELECT screenname, password FROM users WHERE username = $1 and password=$2";
    const result = await pool.query(query, [username, password]);
    console.log(result);
    if (result.rowCount == 1) {
      console.log(result.rows[0]);
      console.log("Login succeeded");
      res.json({ status: "success", screenname: result.rows[0].screenname });
    } else {
      // now need to see if the problem is the username or the password
      // note: there is an easier way to do this but I didn't want to give you
      // too many clues!
      const query2 =
        "SELECT screenname, password FROM users WHERE username = $1";
      const result2 = await pool.query(query2, [username]);
      if (result2.rowCount == 1) {
        res.json({ error: "Password Incorrect" });
      } else {
        res.json({ error: "Username not found" });
      }
    }
  } catch (err) {
    console.log("ERROR " + err);
  }
});

app.post("/create", async (req, res) => {
  let hash;
  const username = req.body.username;
  const password = req.body.password;
  const screenname = req.body.screenname;
  try {
    const query =
      "INSERT INTO users (username, password, screenname) VALUES ($1, $2, $3)";
    const result = await pool.query(query, [username, password, screenname]);
    //console.log(result);
    if (result.rowCount == 1) {
      console.log(screenname);
      res.json({ status: "success", screenname: screenname });
    } else {
      res.json({ error: "User not created" });
    }
  } catch (err) {
    console.log("ERROR " + err);
    if (err.message.search("duplicate") != -1) {
      res.json({ error: "Username taken" });
    }
  }
});

var pool = new Pool(config);

app.get("/hello", (req, res) => {
  res.json("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}/`);
});
