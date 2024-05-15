# User Management System
### Author: Sharnabh Banerjee
### Date: 15.05.2024

## Prerequisites
 - Run this command in terminal
``` 
npm install
```
 - Create a database in mySQL
 - Run Following commands in mySQL
 ``` 
 CREATE TABLE `DATABASE`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);
 ```
  ``` 
 CREATE TABLE `DATABASE`.`blacklisttokens` (
  `id` INT NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `token_UNIQUE` (`token` ASC) VISIBLE);
 ```

 - Create a secret key in .env file.
 - Edit Username, Password and Database in config.json
 ### Now You are good to GO

<br>
<br>

 ## Testing in POSTMAN
 - Create a new collection in POSTMAN
 - Create a new request in POSTMAN
 - Select the request method POST for register, login and logout endpoints
 - Select the request method GET for dashboard endpoints
 - For Post methods use the template to test the endpoints
    - URL : http://localhost:3000/auth/{endpoint}
    replace {endpoint} with login, register, logout
    - Register and login template to be kept in body -> raw -> JSON
    ```
        {
    "username": "USERNAME",
    "password": "PASSWORD"
    } 
    ```
## Approach
- I used bcryptjs for securing the user password
<br> jsonwebtoken for JWT Token Creation
<br> sequelize for data manipulation
- To ensure security I have set an expiry time for the Token and after logging out the token will be added to blacklist and can never be used again

## challenges 
- I have never used a blacklisting mechanism, I had to study about it how to use it
