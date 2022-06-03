# MERN AMAZONA

MERN E-Commerce Store App

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
