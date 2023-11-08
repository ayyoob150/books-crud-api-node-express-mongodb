# Node.js Express API

## Description
Implements a book model (title, author, summary)
Implements MCS pattern (The model-controller-service pattern)
Implements Api endpoints for CRUD operations executions as below
○	Add a new book (title, author, summary)
○	View a list of all books
○	View details of a specific book by its ID
○	Update a book's details
○	Delete a book

## Table of Contents

- [Installation](#installation)
- [Run Project](#Run-Project)

## Installation

1. Clone the repository 
2. run command npm install

## Run-Project

1. Make sure you have an account on mongodb atlas
2. create a database in a cluster at mongodb
3. prepare the connection string as examplified in the file env.default 
4. make sure you create a .env file as per the file env.default 
5. put the prepared connection string in .env file
6. run command npm run dev 
7. Refer to the postman collection json file and import it into your postman app and test the Api's
8. Remember to chnage the port in the urls described in postman collection as per the port set by you to run this App on in the env file 



