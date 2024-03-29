# MERN AMAZONA E-COMMERCE APP

MERN E-Commerce Store App created to increase understanding of the React front-end framework. 
Tutorial by Coding with Basir: https://www.youtube.com/watch?v=CDtPMR5y0QU&t=1625s

# Objectives

1. Create React Application
2. Create Git Repository

3. List Products

- Create products array
- Add product images
- Render products
- Style products

4. Add Routing

- npm i react-router-dom
- create router for home screen
- create router for product screen

5. Create Node.JS Server

- run npm init in root folder
- update package.json set type: module
- add .js to imports
- npm install express
- create server.js
- add start command as node backend/server.js
- require express
- create route for / return backend is ready
- move product.js from frontend to backend
- create route for /api/products
- return products
- run npm start

6. Fetch Products From Backend

- set proxy in package.json
- npm install axios
- use state hook
- use effect hook
- use reducer hook

7. Manage State By Reducer Hook

- define reducer
- update fetch data
- get state from useReducer

8. Add Bootstrap UI Framework

- npm install react-bootstrap bootstrap
- update app.js

9. Create Product and Rating Component

- create rating component
- create product component
- use rating component in product component

10. Create Product Details Screen

- fetch product from backend
- create 3 columns for image, info and action

11. Create Loading and Message Component

- create loading component
- use spinner component
- create message component
- create utils.js to define getError function

12. Implement Add to Cart

- create React context
- define reducer
- create store provider
- implement add to cart button click handler

13. Complete Add to Cart

- check if item in cart exists
- check count in stock in backend

14. Create Cart Screen

- create 2 columns
- display items list
- create action column

15. Complete Cart Screen

- click handler for inc/dec item
- click handler for remove item
- click handler for checkout

16. Create Signin Screen

- create sign in form
- add email and password
- add signin button

17. Connect To MongoDB Database

- create atlas mongodb database
- install local mongodb database
- npm install mongoose
- connect to mongodb database

18. Seed Sample Data

- create product model
- create user model
- create seed route
- use route in server.js
- seed sample product

19. Seed Sample Users

- create user model
- seed sample users
- create user routes

20. Create Signin Backend API

- create signin api
- npm install jsonwebtoken
- define generateToken

21. Complete Signin Screen

- handle submit action
- save token in store and local storage
- show user name in header

22. Create Shipping Screen

- create form inputs
- handle saving shipping address
- add checkout wizard bar

23. Create Sign Up Screen

- create input forms
- handle submit
- create backend api

24. Implement Payment Method Screen

- create input forms
- handle submit

25. Create Place Order Screen

- show cart items, payment and address
- handle place order action
- create place order api

26. Implement Place Order Action

- handle place order action
- create order create api

27. Create Order Screen

- create backend api for order/:id
- fetch order api in frontend
- show order information in 2 columns

28. Implement PayPal Payment

- generate paypal client id
- create api to return client id
- install react-paypal-js
- use PayPalScriptProvider in index.js
- use usePayPalScriptReducer in Order Screen
- implement loadPayPalScript function
- render paypal button
- implement on Approve payment function
- create pay order api in backend

29. Display Order History

- create order screen
- create order history api
- use api in the frontend

30. Create Profile Screen

- get user info from context
- show user information
- create user update api
- update user info

31. Publish to Heroku

- create and config node project
- serve build folder in frontend folder
- create heroku account
- connect it to github
- create mongodb atlas database
- set database connection in heroku env variables
- commit and push

32. Add Sidebar and Search Box

- add sidebar
- add search box

33. Create Search Screen

- show filters
- create api for searching products
- display results

32. Create Admin Menu

- define protected route component
- define admin route component
- add menu for admin in header
