# CS450 Core Competency

#### *due: anytime before 11pm on 4 December*



#### Prerequisite: completion of workshop v1 and v2

### You will have 6 hours to complete this task.



#### You can do this task anytime you want.

Read this writeup carefully



You will be designing and implementing an SQL database and writing a NodeJS application. XP is based not only on a working solution but implementing the good practices we learned in class (for ex., tables in 3nf, basic protection against SQL injection, etc). 

#### Here is what you will not be doing.

* You do not need to implement anything on a Google VM. 

* You do not need to write or understand Next.js or React.

  

Before starting, you may want to familiarize yourself with the code you have written for this class, particularly that for workshop v1 and v2. Basically, you will be writing code for a something similar to the workshop 2 task. During the 6 hours, you can have your code for all the tasks and project available to you, and you can use the internet for assistance. If you feel you are still a bit shakey understanding workshop v2, feel free to chat with other students in the class about these rudiments, **BEFORE YOU RECEIVE THE QUESTION**. **Collaboration after you receive the question will be considered cheating** (for example you cannot ask a person who took the competency test about it or how to best prepare for it).

You will have 6 hours to complete the task. Before you start:

1. allocate a block of time to work on the task.
2. be at a computer with the set of tools you use for coding (you favorite development environment)
3. have access to your previously written code.
4. feel free to reference notes, and search the web to get documentation.
5. review how to work with Postman particularly collections and setting environments





When you are ready send email to [**submit.o.bot+cs350.corecompetency1@gmail.com**](mailto:submit.o.bot+cs350.corecompetency1@gmail.com) (this method gives me a timestamp of when you started the project)NOTE: If you don’t get a response in a few minutes try from a non-umw account. GMAIL often identifies umw email addresses as spam.

You will be sent a link to a page describing the problem. 

Like all your other projects and tasks: you need to submit 

* your sql file
* Your code files(s)
* your package.json file.

using GitHub and the submit page within 4 hours. 

You will not get immediate feedback of your results.

My guess is that at least ⅓ of you will find this task easy and complete the work in 3 hours or less. 

Do not discuss this problem with others. 

### More details

You will need to write code to handle 5 requests. 
I provide a description (an api) of what you need to write. For example that description might look like

### 1. get {{URL}}/user   50xp

#### request 

Parameters:

key | sample value
:--- | : ---
username | ann

#### Response

```
{
    "status": "OK",
    "result": {
            "firstname": "Ann",
            "lastname": "Mulkern",
            "hometown": "Fargo, ND",
            "status": "on vacation",
                    }}
```



### 2. Post: {{URL}}/user 50xp

#### request

X-www-form-urlencoded body variables:



| key       | sample value |
| :-------- | ------------ |
| username  | ann          |
| firstname | Ann          |
| lastname  | Mulkern      |
| hometown  | Fargo, NM    |
| status    | on vacation  |

#### Response

```
{
    "status": "OK",    
}
```

You can see that the API is underspecified. For example, it doesn’t say what the response should be if the user is not in the database when you do the get request. You can decide how to best handle unspecified conditions.

When you get the project description it may help to skim the entire set of requirements before starting to code, which will help you have a good initial database design.

**The more your code uses SQL for the heavy lifting the more XP you will get.** For example, suppose we have a get request for the movie database that takes 2 actors and returns the movies they were in together. Code that accomplishes this with one SQL query will receive more XP than code that requires 6 separate queries.



#### Problems

If the problem is on my end (link doesn’t work) send me a text message at 575.680.4041 or message me on Slack. Keep in mind that I am a normal person and not available 24/7.

**Make sure your database is in 3NF.** 



### Please remove any debugging print statements before submitting your code

