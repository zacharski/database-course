# Task 1. Getting started with PostgreSQL

### Associated Videos

All the SQL module of the Inquiryum course

###

In the SQL module, you learned how to

- install PostgreSQL on your laptop
- how to design and create databases and database tables
- how to insert information into a database
- how to query a database table

This task is designed to help you practice these skills. There are a lot of bits and pieces to this task, but no single piece is that difficult. When you complete this task you will have confidence that you have the essential prerequisites to complete future tasks.

## The steps

### Step 0 install PostgreSQL

This step is outlined in the SQL module at the Inquiryum website.

### Step 1 clone the code

The files we need are in the same folder as this readme file. The easiest way to obtain the files is to clone the entire repository

`git clone https://github.com/zacharski/database-course.git`

For the gitlab lab we created our own git repository. We want to copy the task1 folder that was part of the repository we just cloned, to our db-class repository in the practice folder. For example,

`cp -r tasks/task1 ~/db-class/practice`

### step 2 nvm install

At this point we need to install `node`and `npm` We are going to manage these with `nvm` (Node Version Manager). For Mac OSX, Linux, and WSL (Windows Subsystem for Linux) install `nvm` by executing

​ `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

After this, close your terminal and open it again. Now we can install `node` and `npm`

​ `nvm install 14.3`

### step 3 add a .env file with the following information

In the `task1` directory you need to add a file name `.env` with the contents:

```
DB_HOST=localhost
DB_USER=postgres
DB_PASS=yourPassword
```

Replace the string yourPassword with your postgres password. NOTE: It is generally a bad idea to use the root account, but since this is our first practice we are trying to keep things easy.

Make sure that .env is in your `.gitignore` file. With the .env file we are making sure that passwords and other sensitive information in your code is not present in your github repository.

### Step 4 load the SQL file into the database

Next, we need to load the `task1.sql` file into postgres. This was covered in the SQL module. Go ahead and do so now.

### Step 5 Install the libraries

In your terminal, if you haven't already, change into the task1 directory. Next execute:

`npm install`

This will install the necessary libraries.

### Step 6 the first execution

Finally we are going to run the code with

`node task.js`

If you followed all the steps correctly you should see:

`LOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY`

followed by an error message:

`(node:209844) UnhandledPromiseRejectionWarning: AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:`

`12 !== 3`

You will be writing some queries to remove these errors one by one.

### Step 7 writing the first query

Starting on line 14 of the task.js file, you will see

```javascript
// YOUR TASK
//  query 1: We want the titles and running time, of all the movies whose running time is less than 100 minutes.
//           Ordered by the shortest movie first.
//
const query1 = "SELECT * FROM movies";
```

You see an English sentence describing what we want, and your task is to change `query1`to be the query that will give us the requested information. When you write query1, you can test the code by again executing `node task.js`This time you should see

```javascript
LOOKS LIKE THE DATABASE WAS INSTALLED CORRECTLY


[
  { title: 'Echo In The Canyon', mlength: '82' },
  { title: 'The Peanut Butter Falcon', mlength: '93' },
  { title: 'Ready Or Not', mlength: '95' }
]
   Evaluating query 1 ...
   Correct number of rows returned
   Correct first entry
   Correct last entry
QUERY 1 TESTS PASSED
```

You proceed in this way until you finish the 4 queries.

### Step 8 creating a database table.

The next step is to modify the task1.sql file. You need to both create and information to a new table that is to be called billboard. Again, the name needs to be billboard and the names of the columns and values in those columns need to match the following:

billboard

|  id | artist        | track                           | album                                    |
| --: | :------------ | :------------------------------ | :--------------------------------------- |
|   1 | Lizzo         | Truth Hurts                     | Cuz I Love You                           |
|   2 | Lizzo         | Good as Hell                    | Cuz I Love You                           |
|   3 | Shawn Mendes  | Senorita                        | Shawn Mendes                             |
|   4 | Billie Eilish | Bad Guy                         | When We All Fall Asleep, Where Do We Go? |
|   5 | Lil Tecca     | Ran\$om                         | Ran\$om                                  |
|   6 | Shawn Mendes  | There's Nothing Holdin' Me Back | Illuminate                               |
|   7 | Billie Eilish | Everything I wanted             | -                                        |

Once you finish editing the file, load it again into postgres. After that you can test it by running `node task.js`again.

If you did this step correctly you should see:

`LOOKS LIKE YOU DID A GOOD JOB WITH THE DATABASE`

### Step 9 push your code to your github repository.

Again, make sure your `.gitignore` file includes `.env` and `node_modules` If you did everything correctly neither should be in your github folder.

### Step 10 formally submit your code

[Submission Form](https://forms.gle/Wymwd7ZoTvMs3vYL7)

### Step 10 notify the instructor
