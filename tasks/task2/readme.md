# Task 2. Getting started with Javascript

### Associated Videos

All the SQL module
In the [Intro to Node Module](http://inquiryum.com/modules/nodejs%20module/Intro-to-Node/) of the Inquiryum course:

- Intro to Node
- Intro to Javascript
- Asynchronous Programming

In the Intro to Node and Intro to JavaScript sections of the NodeJS module, you learned how to

- write a basic JavaScript program using constructs you learned in other languages (for loops, conditionals, etc.)
- use the `for of` loop JavaScript provides
- how to use the `assert`statement as a rudimentary way to test your code
- how to write an arrow function `(a, b, c) => {:}...}`

This task is designed to help you practice these skills. There are a lot of bits and pieces to this task, but no single piece is that difficult. When you complete this task you will have confidence that you have the essential prerequisites to complete future tasks.

## The steps

### Step 1 clone the code

The files we need are in the same folder as this readme file. The easiest way to obtain the files is to clone the entire repository

`git clone https://github.com/zacharski/database-course.git`

For the gitlab lab we created our own git repository. We want to copy the task2 folder that was part of the repository we just cloned, to our db-class repository in the practice folder. For example,

`cp -r tasks/task2 ~/db-class/practice`

### step 2 nvm, node, and npm installed

You should have these programs installed when you complete task1

### Step 3 Install the libraries

In your terminal, if you haven't already, change into the task2 directory. Next execute:

`npm install`

This will install the necessary libraries.

### Step 5 the first execution

Finally we are going to run the code with

`node js1.js`

If you followed all the steps correctly you should see:

```javascript
assert.js:101
  throw new AssertionError(obj);
  ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
+ actual - expected


```

You task is to complete 3 functions

### Step 6 getNumber

The provided code has the following array of json objects:

```javascript
const phonebook = [
  { name: "Ann", phone: "575.580.1400", role: "Developer" },
  { name: "Ben", phone: "575.641.4041", role: "Manager" },
  { name: "Clara", phone: "512.717.5690", role: "Developer" },
  { name: "Dan", phone: "512.444.1496", role: "DevOps" },
  { name: "Erica", phone: "550.619.9916", role: "Manager" },
  { name: "Fiona", phone: "550.789.5512", role: "Developer" },
  { name: "Gideon", phone: "540-654-1000", role: "Marketing" },
  { name: "Hilary", phone: "540-654-1020", role: "Marketing" },
  { name: "Ichika", phone: "404-990-4717", role: "Sales" },
];
```

Your first task is to complete the provided `getNumber` function.

```javascript
/*
   The getNumber function takes a person's name as a string and an array of
   json objects (the phonebook). It finds the name in the phonebook and 
   returns the associated telephone number. If the person's name is not
   found it returns the string 'not found'
*/

const getNumber = (person, book) => {
  // TO DO
  return "not found";
};
```

As you see it takes two arguments. The first is a person's name and the second is the array of json objects (our `phonebook` shown above), It should return the associated phone number of the person. For example `getNumber('Erica', phonebook)` should return `4550.619.9916`

When you finish the function and run the code again, you should see

```javascript
512.717.5690
not found
GETNUMBER PASSED ALL TESTS

[]
/home/raz/database-course/tasks/task2/js1.js:97
assert.equal(answer.filter(function(item){ if (item.employee == 'Ann') return item})[0].employee, 'Ann')

```

This shows that your code for getNumber is correct and next you need to finish the next function.

### Step 7 find

Next, you need to finish the `find` function. Find takes two arguments a string representing the role and the phonebook array. It returns a list of people matching that role.

```javascript
/* The find function takes a role which is a string and a phonebook
   which is an array of json objects. finds the people matching that role
   and returns a list of json objects of the form
   [{employee: 'Ann}, {employee: Clara}]

   For example, find('Developer', phonebook) should return

   [ { employee: 'Ann' }, { employee: 'Clara' }, { employee: 'Fiona' } ]
 
*/

const find = (role, phonebook) => {
  let answer = [];
  // TODO
  return answer;
};
```

After you finished the function you can test it with `node js1.js`

### Step 8 roles

Finally, you are to finish the roles function:

```javascript
/*
   The roles function takes a phonebook (an array of json objects) as 
   an argument.  It organizes the phonebook by role returning for each
   role, the names of the people who have that role.

   For example. role(phonebook) should return

    {
        Developer: [ 'Ann', 'Clara', 'Fiona' ],
        Manager: [ 'Ben', 'Erica' ],
        DevOps: [ 'Dan' ],
        Marketing: [ 'Gideon', 'Hilary' ],
        Sales: [ 'Ichika' ]
    }
*/
const roles = (book) => {
  let answer = {};
  // TODO
  return answer;
};
```

To help you with this consider the following array of json objects:

```
const dogs = [
  { name: "Roper", breed: "Border Collie", color: "black" },
  { name: "Clyde", breed: "Lab", color: "chocolate" },
  { name: "Roz", breed: "Standard Poodle", color: "chocolate" },
  { name: "Dido", breed: "Border Collie", color: "black" },
  { name: "Merce", breed: "Standard Poodle", color: "white" },
  { name: "Sparky", breed: "Standard Poodle", color: "red" },
  { name: "Bo", breed: "Portuguese Water Dog", color: "black" },
  { name: "Sunny", breed: "Portuguese Water Dog", color: "black" },
  { name: "Kiko", breed: "Border Collie", color: "black" },
];
```

Now let's say we want a list of dog names by breed. So something like...

```
{
  'Border Collie': [ 'Roper', 'Dido', 'Kiko' ],
   Lab: [ 'Clyde' ],
  'Standard Poodle': [ 'Roz', 'Merce', 'Sparky' ],
  'Portuguese Water Dog': [ 'Bo', 'Sunny' ]
}

```

We don't want to hard code the breed names ('Border Collie', 'Lab' etc.). That would be poor programming. We want a more general function. This would work:

```
const byBreed = (dogList) => {
  let breeds = {};
  for (const dog of dogList) {
    if (breeds[dog.breed]) {
      // add to it
      breeds[dog.breed].push(dog.name);
    } else {
      breeds[dog.breed] = [dog.name];
    }
  }
  return breeds;
};
```

so if we apply that function

```
console.log(byBreed(dogs));
```

we get

```
{
  'Border Collie': [ 'Roper', 'Dido', 'Kiko' ],
   Lab: [ 'Clyde' ],
  'Standard Poodle': [ 'Roz', 'Merce', 'Sparky' ],
  'Portuguese Water Dog': [ 'Bo', 'Sunny' ]
}

```

Take your time and work through the function to gain an understanding.

### Step 9 push your code to your github repository.

Again, make sure your `.gitignore` file includes `.env` and `node_modules` If you did everything correctly neither should be in your github folder.

### Step 10 notify the instructor
