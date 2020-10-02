# workshop server version 2

workshop-server-v2

[Postman File](workshopServer2.postman_collection.json)



## Requirements



* Implement the following API (pass all the Postman tests)
* All tables must be in 3NF
  * All tables have a primary key
  * Foreign keys are defined as required
* Your code must include an SQL join. Do not use comma join
* Server must run in production on cloud-based server
  * The node code should be run through PM2
  * You should use NGINX reverse proxy







## The API



### 1. Post request: /create-user



#### Request

X-www-form-urlencoded body variables:

Key | Sample Value
:-- | :--
firstname | Maggie
lastname | Phillips
username | mphillips
email | mphillips@uwm.edu

#### Response

If username not already in database:

`{ "status": "user added"}`

else

`{ "status": "username taken"}`

**Notes:** This adds an entry into the database for that user. 



### 2. Delete request: /delete-user

#### Request

X-www-form-urlencoded body variables:

| Key      | Sample Value      |
| :------- | :---------------- |
| username | mphillips         |


#### Response

`{ "status": "deleted"}`



**Notes:** This deletes an entry from the database. 



### 3. Get request: /list-users

#### Request

parameters



| Key  | Sample Value |
| :--- | :----------- |
| type | full         |


#### Response

If type = full return all information from the database:



`{
    "users": [
        {
            "username": "ann",
            "firstname": "Ann",
            "lastname": "Mulkern",
            "email": "mulkern@gmail.com"
        },
        {
            "username": "maggie'phillips",
            "firstname": "Maggie",
            "lastname": "Phillips",
            "email": "MargaretP@uwm.edu"
        },
        {
            "username": "phillips",
            "firstname": "Maggie",
            "lastname": "Phillips",
            "email": "maggie@wikibuy.com"
        },
        {
            "username": "clara",
            "firstname": "Clara",
            "lastname": "Wieck",
            "email": "clara@piano.com"
        }
    ]
}`

If type = summary just return firstname and lastname: 

`{
    "users": [
        {
            "firstname": "Ann",
            "lastname": "Mulkern"
        },
        {
            "firstname": "Maggie",
            "lastname": "Phillips"
        },
        {
            "firstname": "Maggie",
            "lastname": "Phillips"
        },
        {
            "firstname": "Clara",
            "lastname": "Wieck"
        }
    ]
}`

### 4. Post request: /add-workshop



#### Request

X-www-form-urlencoded body variables:

| Key      | Sample Value |
| :------- | :----------- |
| title    | Tensorflow   |
| date     | 2020-11-01   |
| location | Albuquerque  |
| maxseats | 40           |
| instructor | Fiona Helbron |

#### Response

If workshop not already in database:

`{ "status": "workshop added"}`

else

`{ "status": "workshop already in database"}`



**Notes:** This adds the workshop into the database. A workshop title is not unique. What is unique is a title, date, location tuple

### 5. Post request: /enroll

 

#### Request

X-www-form-urlencoded body variables:

| Key        | Sample Value  |
| :--------- | :------------ |
| title      | Tensorflow    |
| date       | 2020-11-01    |
| location   | Albuquerque   |
| username   | maggie        |

#### Response

If username not already in database don't add anything and send:

`{ "status": "user not in database"}`

Else if workshop not already in database don't add anything and send:

`{ "status": "workshop does not exist"}`

Else if user already enrolled in workshop:

`{ "status": "user already enrolled"}`

Else if workshop already filled (number of people registered equals maxseats):

`{ "status": "no seats available"}`

Else

`{ "status": "user added"}`

**Notes:** Enrolls a user in a workshop

### 6. Get request: /list-workshops

#### Request

No parameters or variables



#### Response



`{`

`"workshops": [` 

`{"title": "React Fundamentals", "date": "2018-03-16", "location": "Boston"},`       

`{"title": "Tensorflow",      "date": "2018-05-06",    "location": "Martha's Vineyard"    }]}`



**Notes**: Lists all the workshops in the database

### 7. Get request: /attendees



#### Request

Parameters

| Key        | Sample Value  |
| :--------- | :------------ |
| title      | Tensorflow    |
| date       | 2020-11-01    |
| location   | Albuquerque   |


#### Response

If workshop not already in database:

`{ "error": "workshop does not exist"}`



else



`{"attendees": [    {"firstname": "Maggie", "lastname": "Phillips"}, {"firstname": "Ann", "lastname": "Mulkern"    }  ]}`

**Notes:** Returns list of workshop attendees

## General Notes





When you get a date back from postgresql it sometimes looks wonky. There is a node package that can help you calledformat dates. 

**npm install dateformat**

then in your code

`var dateFormat = require('dateformat');**// then to use it:**dateFormat(row.wdate, "yyyy-mm-dd")`



where row.wdate is a date object 


[Database Design Hints](https://github.com/zacharski/cpsc350notes/blob/master/database_design.md)
[Common Table Expressions](https://github.com/zacharski/cpsc350notes/blob/master/commontableexpressions.md)