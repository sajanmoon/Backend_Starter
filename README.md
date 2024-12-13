# Project setup

- npm init
- Folder > src > app.js
- Install Express
- Create .gitignore file > node_modules
- In App.js create server
- <img src="./images/creatingserver.png" alt="Logo" width="600">
  <!-- - ![serverimage](./images/Screenshot2024-12-12121546.png) -->
- Install nodemon

# Git

- Create a git repositary
- Push the code

# Postman

- After creating the differnt api's
- Start Testing on postman
- Workspace > black collection > New > HTTP

# REST API's

- Get, Post, Patch, Delete

# Middleware's

- Create a folder middleware in src folder
- Write a middleware (Middleware > auth.js) for different routes
- To use middleware for route,export from middleware file
- Import middleware in route file and write after the path (eg "./test",userAuth,()={})

# MongoDB

- Create a config folder > database.js
- Install mongoose
- in database.js > import mongoose > create async connectDB function > paste dabaseURL mongoDB shell
- Export connectDB function to app.js(so that first we will connect to database and then will run the server)
- <img src="./images/mongoDBdatabase.png" alt="Logo" width="600">
- <img src="./images/databaseInAppjs.png" alt="Logo" width="600">

# Cluster

- Go to mongoDB website
- Create a free M0 cluster
- Create user
- Get the connection string
