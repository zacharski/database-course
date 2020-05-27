# Workshop Server

You are going to be writing Javascript server side code to support people signing up for workshops. A short demo or this is in the RESTful video [here](https://youtu.be/oDEO9-OM4_c?t=9m21s). 

Postman File: [workshop1_postman_collection.json](http://zacharski.org/files/courses/cs350/workshop1_postman_collection.json)



## Some Guidance

You should first get this running on your development machine (your laptop). By 'get this running' we mean  that you write the code using your favorite code editor on your laptop (for example, VS Code). You have PostgreSQL installed on your laptop and you load in the SQL file you wrote. You execute the JavaScript code using node. And finally you test the code using Postman. You should get things running perfectly on your development machine before moving your project to the production environment.

It is generally not good practice to sftp or copy files some other way from your development machine to production. Use a git repo (for example, gitlab) as an intermediary.

## Requirements:

Your app should store the data in PostgreSQL and implement the following API. For security, your app should not use the root postgres user and password. The password you do use should not be something easily guessed. 

## API

### `API` get request

If the request includes a workshop argument (for example 

​       `localhost:8080/api?workshop=React+Fundamentals`

If the value of the workshop argument (React Fundamentals in this case) is present in the database, then return JSON identical  to:

`{ "attendees": [
    "Ahmed Abdelali",
    "Ann Frank",
    "Ann Mulkern",
    "Clara Weick",
    "James Archer",
    "Linda Park",
    "Lucy Smith",
    "Roz Billingsley",
    "Samantha Eggert",
    "Tim Smith"
         ]
},  
                                     `
So a JSON object with the key being ‘attendees’ and the value being a list of the attendees for that workshop.

If the value of the workshop argument (React Fundamentals in this case) is not present in the database (for example, `test.com/api?workshop=React+Fundamentals+1`), then return the JSON:

`{ "error": "workshop not found"}`



If the API does not include the workshop argument, return a JSON with a list of all the unique workshops:



``{ "workshops": [`
    `"DevOps 101",`
    `"Docker Container Fundamentals",`
    `"Machine Learning",`
    `"Modern Javascript",`
    `"MongoDB",`
    `"React Fundamentals",`
    `"Self-Driving Cars"`
  `]`
`}`

### API post request

Post requests should be urlencoded.
The post request will contain 2 arguments:

* **attendee**: the name of the attendee

* **workshop**: the title of the workshop

  

  

If one or both of the arguments are missing your app should return:
`{ error: 'parameters not given'}`

Else if the attendee is already enrolled in the workshop your app should return:
`{  error: 'attendee already enrolled'}`

(Note: attendees can be enrolled in multiple workshops)

Else an entry should be added to the database enrolling the attendee into that workshop and your app should return 
`{ "attendee": "Emily Blunt", "workshop": "React Fundamentals"}`
as confirmation.  (replacing Emily Blunt and React Fundamentals with the correct information)