# A Complete Web Application

Your task is to implement a web application that allows people to search for nutritional information about food. Here is a [Video Demo](https://youtu.be/ArPMt0m6EsE?list=PLuZfoSIficQvPRuNhFHPcFpYsWy9Wb3iQ). 

Warning: The video just gives a demo of the completed application. **Do not follow the instructions in the rest of the video**. Use what we learned about Nextjs and writing backend code. Plus watch the Inquiryum video on implementing a complete web application.

This [SQL File](food.sql) contains the data you should use. 

### Your app should 

* Use a React Component to provide the user interface
* Use PostgreSQL
  * App uses a postgres user other than the root one and user has only the permissions that are required to run the application.
  * App uses ‘best practices’. For example, avoid code that is susceptible to SQL injection.
* The video shows the functionality, but the basics are as follows
  * When the search box is empty, the results display is blank.
  * When a user types in even a single letter, entries matching that search are displayed. You should limit the search results to some reasonable number. In the video I limited mine to 25. 
  * When there are no entries that match the search term, the results display should be blank.
  * The app should look reasonably good. An app that has zero styling with receive reduced XP. An app that goes beyond the basic styling will receive extra xp.
  * The app must be running in a production environment on a cloud-based service (for example, Google Cloud) that is accessible to everyone. 
  * **Your app should display the total fat for each food. This is not present in the database but must be computed.**
  * If you have a number const x = 1.1106732 you can format it to 2 decimal places by using x.toFixed(2)

### Code should be running on Google Cloud and submitted to github

