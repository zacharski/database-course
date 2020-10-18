# Task 7. Getting Serious with SQL

## The steps

#### 1. install the sql files into postgresql

Because of the size of the files, they are not included in this repository.



* [Movie Database SQL file](http://www.zacharski.org/files/courses/cs350/moviesP.sql)
* [Chinook](http://www.zacharski.org/files/courses/cs350/ChinookPv2.sql)

After you insert them into PostgreSQL, look them over to understand the structure of the two databases.



#### 2. Get the code
The files we need are in the same folder as this readme file.  

#### 3. Create a .env file
Make sure to create a .env file as you did for other tasks.

#### 4. install the libraries
Install the libraries using 

```
npm install
```

#### 5. the first execution

Finally we are going to run the code with 



`node task.js`



If you followed all the steps correctly you should see:



```

LOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY




(node:198482) UnhandledPromiseRejectionWarning: AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

1845 !== 19

    at movies (/home/raz/code/my_database_code/tasks/task7/task.js:57:10)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

```



#### Step 7. Writing the first query

The queries in English are written in English. You are to convert these to SQL queries. **You will not be editing task.js**. All your queries will be in the file `queries.json`. 

For example, the first query is *What movies was Nicolas Cage in? (please name the columns film and actor) ordered alphabetically by film title?* The queries.json file looks like:

```
{
  "query1": "SELECT * FROM movie",
  "query2": "SELECT * FROM movie",
  "query3": "SELECT * FROM movie",
  "query4": "SELECT * FROM movie",
  "query5": "SELECT * FROM movie",
  "query6": "SELECT * FROM movie",
  "query7": "SELECT * FROM movie",
  "query8": "SELECT * FROM movie",
  "query9": "SELECT * FROM movie",
  "query10": "SELECT * FROM movie"
}

```

You are to replace the query1 `SELECT * FROM movie` with the correct query. Once you do that and rerun the code you should see...

```
LOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY




   Evaluating query 1 ...
   Query 1 correct

   Evaluating query 2 ...
(node:198993) UnhandledPromiseRejectionWarning: AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

1845 !== 1

```

That means that your query 1 was correct and it is time to move to query 2!

#### Step 8. Push your code to your github repo

#### Step 9. fill out the submission sheet

This task is worth 35xp.



### Queries

1. What movies was Nicolas Cage in? (please name the columns film and actor) ordered alphabetically by film title?

2. I would like to know the highest rated (score) movie with Sandra Bullock. (show columns titled film and rating)?

3. What actors were in the movie Blade Runner (order alphabetically and name the column actor)?

4. I would like a list of all movies where the director also acted in the film. The output should include a column named 'director' containing the director's name, and 'film' containing the name of the film. Order alphabetically by director. If there are multiple movies by the same director order those by film title (so first ordered by director's name, and then film)

5. I would like a list of actors and the number of movies they were in ordered by the number of movies (and actors with the same number of films should be ordered alphabetically by actor). Please show me the actors that have been in ten or more films. (name the columns actor and films)

6. What actors were in movies with Michelle Pfeiffer? (column named actors and order by actors)

7. I would like to see the artist name and the number of albums that artist produced. I want to see the top five in order. Name the columns artist and albums (Chinook)
   
8.  A list of the albums by Santana (in a column called album ordered alphabetically).

9. The first and last names of all employees and the first and lastnames of who they report to. Label the columns employee_firstname, employee_lastname, manager_firstname, manager_lastname. Order by Employee lastname then firstname. don't display employees who don't report to anyone (Chinook )

10. I would like to know the artist that sold the most number of tracks (columns named artist and tracks_sold)

    
