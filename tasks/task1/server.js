require('dotenv').config()
const assert = require('assert').strict;

const Pool = require("pg").Pool;
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "taskone"
};

const pool = new Pool(config);

// YOUR TASK
//  query 1: We want the titles and running time, of all the movies whose running time is less than 100 minutes. 
//           Ordered by the shortest movie first.
//
const query1 = "SELECT * FROM movies";
//
// query 2: We want the titles of all the movies whose title ends with the letter 'e' ordered alphabetically
//
const query2 = "";
//
// query 3: for each genre, the total boxoffice. Ordered by box office total. 
//          The column with that total should be labeled total_boxoffice. So something that returns:
//
//        genre    | total_boxoffice 
//    -------------+-----------------
//      Documentary |             3.2
//      Horror      |            13.8
//      Drama       |            29.9
//      Comedy      |           370.6
//      Animation   |           968.5
//      Action      |         3853.27
const query3 = "";
//
// query 4: print out the title and boxoffice of the movie with the highest boxoffice.
//
const query4 = "";

const foo = async(req, res) => {

    //
    // testing database install
    //
    let response = await pool.query("SELECT * FROM movies");
    assert.equal(response.rowCount, 12);
    console.log("\n\nLOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY\n\n\n\n");
  



    //
    // query 1 test
    //
    response = await pool.query(query1);
    console.log(response.rows);
    assert.equal(response.rowCount, 3);
    console.log("   Evaluating query 1 ...");
    console.log("   Correct number of rows returned");
    assert.equal(response.rows[0].title, 'Echo In The Canyon');
    assert(response.rows[0].mlength == 82);
    assert.equal(Object.keys(response.rows[0]).length, 2);
    console.log("   Correct first entry");
    assert.equal(response.rows[2].title, 'Ready Or Not');
    assert(response.rows[2].mlength == 95);
    console.log("   Correct last entry");
    console.log("QUERY 1 TESTS PASSED\n\n")
    //
    // query 2 test
    //
    response = await pool.query(query2);
    console.log(response.rows);
    console.log("   Evaluating query 2 ...");
    assert.equal(response.rowCount, 2);
    console.log("   Correct number of rows returned");
    assert.equal(response.rows[0].title, 'Avengers: Endgame');
    assert.equal(Object.keys(response.rows[0]).length, 1);
    console.log("   Correct first entry");
    assert.equal(response.rows[1].title, 'Spider-Man Far From Home');
    console.log("   Correct last entry");
    console.log("QUERY 2 TESTS PASSED\n\n")
    //
    // query 3 test
    //
    response = await pool.query(query3);
    console.log(response.rows);
    console.log("   Evaluating query 3 ...");
    assert.equal(response.rowCount, 6);
    console.log("   Correct number of rows returned");
    assert.equal(response.rows[0].genre, 'Documentary');
    assert.equal(Object.keys(response.rows[0]).length, 2);
    assert(response.rows[0].total_boxoffice == 3.2);
    console.log("   Correct first entry");
    assert.equal(response.rows[5].genre, 'Action');
    assert(response.rows[5].total_boxoffice == 3853.27);
    console.log("   Correct last entry");
    console.log("QUERY 3 TESTS PASSED\n\n")
    
    //
    // query 4 test
    //
    response = await pool.query(query4);
    console.log(response.rows);
    console.log("   Evaluating query 4 ...");
    assert.equal(response.rowCount, 1);
    console.log("   Correct number of rows returned");
    assert.equal(response.rows[0].title, 'Avengers: Endgame');
    assert(response.rows[0].boxoffice == 2796);
    console.log("   Correct answer");
    console.log("QUERY 4 TESTS PASSED\n\n\n")
    

    //
    // TESTING BILLBOARD TABLE
    //
    console.log("   Evaluating Billboard Table ...");
    response = await pool.query("SELECT * FROM billboard WHERE track = 'There''s Nothing Holdin'' Me Back'");
    assert.equal(response.rowCount, 1);
    assert.equal(response.rows[0].track, "There's Nothing Holdin' Me Back");
    console.log("   Shawn Mendes Test Passed");
    response = await pool.query("SELECT * FROM billboard WHERE artist = 'Billie Eilish'");
    assert.equal(response.rowCount, 2);
    console.log("   Billie Eilish Test Passed");
    console.log("LOOKS LIKE YOU DID A GOOD JOB WITH THE DATABASE");
   
}

foo();