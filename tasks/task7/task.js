require("dotenv").config();
const QUERY = require("./queries.json");
const assert = require("assert").strict;

console.log(QUERY.query1);

const Pool = require("pg").Pool;

const movies = async (req, res) => {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "movie",
  };
  const pool = new Pool(config);

  //
  // testing database install
  //
  let response = await pool.query("SELECT * FROM movie");
  assert.equal(response.rowCount, 1845);
  console.log("\n\nLOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY\n\n\n\n");

  //
  // Nicolas Cage Test
  //
  response = await pool.query(QUERY.query1);

  assert.equal(response.rowCount, 19);
  console.log("   Evaluating query 1 ...");

  assert.equal(response.rows[0].film, "8MM");
  assert.equal(Object.keys(response.rows[0]).length, 2);
  assert.equal(response.rows[1].film, "Birdy");
  assert.equal(response.rows[2].film, "Bringing Out the Dead");
  assert.equal(response.rows[3].film, "City of Angels");
  assert.equal(response.rows[18].film, "Wild at Heart");
  console.log("   Query 1 correct\n");

  //
  // query 2 test
  //

  response = await pool.query(QUERY.query2);
  console.log("   Evaluating query 2 ...");
  assert.equal(response.rowCount, 1);
  assert.equal(response.rows[0].film, "Prince of Egypt, The");
  assert.equal(Object.keys(response.rows[0]).length, 2);
  console.log("   Query 2 correct\n");

  //
  // query 3 test
  //

  response = await pool.query(QUERY.query3);
  console.log("   Evaluating query 3 ...");
  assert.equal(response.rowCount, 10);
  console.log("   Correct number of rows returned");
  assert.equal(response.rows[0].actor, "Brion James");
  assert.equal(Object.keys(response.rows[0]).length, 1);
  assert.equal(response.rows[1].actor, "Daryl Hannah");
  assert.equal(response.rows[2].actor, "Edward James Olmos");
  assert.equal(response.rows[3].actor, "Harrison Ford");
  assert.equal(response.rows[9].actor, "Sean Young");
  console.log("   Query 3 correct\n");

  //
  // query 4 test
  //

  response = await pool.query(QUERY.query4);
  console.log("   Evaluating query 4 ...");
  assert.equal(response.rowCount, 134);
  assert.equal(Object.keys(response.rows[0]).length, 2);
  assert.equal(response.rows[3].director, "Barbra Streisand");
  assert.equal(response.rows[3].film, "Prince of Tides, The");
  assert.equal(response.rows[9].director, "Carl Reiner");
  assert.equal(response.rows[9].film, "Dead Men Don't Wear Plaid");
  assert.equal(response.rows[32].director, "David Lynch");
  assert.equal(response.rows[32].film, "Twin Peaks: Fire Walk with Me");
  assert.equal(response.rows[48].director, "Jonathan Frakes");
  assert.equal(response.rows[48].film, "Star Trek: First Contact");
  assert.equal(response.rows[49].director, "Jonathan Frakes");
  assert.equal(response.rows[49].film, "Star Trek: Insurrection");
  console.log("   Query 4 correct\n");

  //
  // query 5 test
  //

  response = await pool.query(QUERY.query5);
  console.log("   Evaluating query 5 ...");
  assert.equal(response.rowCount, 217);
  assert.equal(Object.keys(response.rows[0]).length, 2);
  assert.equal(Object.keys(response.rows[0]).length, 2);
  assert.equal(response.rows[0].actor, "Robert De Niro");
  assert.equal(response.rows[0].films, "29");
  assert.equal(response.rows[8].actor, "Michelle Pfeiffer");
  assert.equal(response.rows[8].films, "21");

  console.log("   Query 5 correct\n");

  //
  // query 6 test
  //

  response = await pool.query(QUERY.query6);
  console.log("   Evaluating query 6 ...");
  assert.equal(response.rowCount, 178);
  assert.equal(Object.keys(response.rows[0]).length, 1);
  assert.equal(response.rows[23].actors, "Cher");
  assert.equal(response.rows[176].actors, "Winona Ryder");
  assert.equal(response.rows[83].actors, "John Malkovich");
  assert.equal(response.rows[170].actors, "Uma Thurman");

  console.log("   Query 6 correct\n");

  console.log("MOVIE TESTS PASSED\n\n\n");
};

const chinookTest = async (req, res) => {
  const configchinook = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "chinook",
  };
  const cpool = new Pool(configchinook);

  //
  // testing database install
  //
  let response = await cpool.query("SELECT * FROM album");
  assert.equal(response.rowCount, 347);
  console.log("\n\nLOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY\n\n\n\n");

  //
  // query 7 test
  //

  response = await cpool.query(QUERY.query7);
  console.log("   Evaluating query 7 ...");
  assert.equal(response.rowCount, 5);
  assert.equal(Object.keys(response.rows[0]).length, 2);
  assert.equal(response.rows[0].artist, "Iron Maiden");
  assert.equal(response.rows[0].albums, "21");
  assert.equal(response.rows[1].artist, "Led Zeppelin");
  assert.equal(response.rows[1].albums, "14");

  assert.equal(response.rows[2].artist, "Deep Purple");
  assert.equal(response.rows[2].albums, "11");

  console.log("   Query 7 correct\n");

  //
  // query 8 test
  //

  response = await cpool.query(QUERY.query8);

  console.log("   Evaluating query8 ...");
  assert.equal(response.rowCount, 3);
  assert.equal(Object.keys(response.rows[0]).length, 1);
  assert.equal(response.rows[0].album, "Santana - As Years Go By");
  assert.equal(response.rows[1].album, "Santana Live");
  assert.equal(response.rows[2].album, "Supernatural");

  console.log("   Query 8 correct\n");

  //
  // query 9 test
  //
  console.log("   Evaluating query 9 ...");

  response = await cpool.query(QUERY.query9);

  assert.equal(response.rowCount, 7);
  const data = [
    {
      employee_firstname: "Laura",
      employee_lastname: "Callahan",
      manager_firstname: "Michael",
      manager_lastname: "Mitchell",
    },
    {
      employee_firstname: "Nancy",
      employee_lastname: "Edwards",
      manager_firstname: "Andrew",
      manager_lastname: "Adams",
    },
    {
      employee_firstname: "Steve",
      employee_lastname: "Johnson",
      manager_firstname: "Nancy",
      manager_lastname: "Edwards",
    },
    {
      employee_firstname: "Robert",
      employee_lastname: "King",
      manager_firstname: "Michael",
      manager_lastname: "Mitchell",
    },
    {
      employee_firstname: "Michael",
      employee_lastname: "Mitchell",
      manager_firstname: "Andrew",
      manager_lastname: "Adams",
    },
    {
      employee_firstname: "Margaret",
      employee_lastname: "Park",
      manager_firstname: "Nancy",
      manager_lastname: "Edwards",
    },
    {
      employee_firstname: "Jane",
      employee_lastname: "Peacock",
      manager_firstname: "Nancy",
      manager_lastname: "Edwards",
    },
  ];

  for (i = 0; i < response.rows.length; i++) {
    assert.equal(
      data[i].employee_firstname,
      response.rows[i].employee_firstname
    );
    assert.equal(data[i].employee_lastname, response.rows[i].employee_lastname);
    assert.equal(data[i].manager_firstname, response.rows[i].manager_firstname);
    assert.equal(data[i].manager_lastname, response.rows[i].manager_lastname);
  }

  console.log("   Query 9 correct\n");

  //
  // query 10 test
  //

  response = await cpool.query(QUERY.query10);
  //console.log(response.rows);
  console.log("   Evaluating query10 ...");
  assert.equal(response.rowCount, 1);
  assert.equal(Object.keys(response.rows[0]).length, 2);
  assert.equal(response.rows[0].artist, "Iron Maiden");
  assert.equal(response.rows[0].tracks_sold, "140");

  console.log("   Query 10 correct\n");

  console.log("CHINOOK TESTS PASSED\n\n\n");
};

const tester = async (req, res) => {
  await movies();
  await chinookTest();
};

tester();
