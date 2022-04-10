# DSM store website

This is the final group project developed at FLAG made to show our learned skills through a Web Store.

# Getting Started 

These instructions will allow you to get a copy of this project on your local machine for development and testing purposes.

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Project Building

This project was built using:

* [React.js] (https://reactjs.org) - Library
* [Eslint] (https://eslint.org[ - Dependency
* [FakeStore] (https://fakestoreapi.com] -  API

# Routes

Now We will show you the routes we used and in case you create a new one please just have it included here.

## As son as you start it this will be the first route:
 
`` GET http://localhost:3000/`` - Homepage

### You can sing in by entering:

`` PUT http://localhost:3000/login`` - Login page

 * Username - mor_2314
 * Password - 83r5^_
 
 #### and have access to:
 
  * `` GET http://localhost:3000/user`` - Userpage with client data 
  * `` GET http://localhost:3000/favorites`` - Favorite's page 
  
#### Simulating a purchase:

  * `` GET http://localhost:3000/products`` - You will find all products and you can sort them in different categories then add to a side cart
  * `` POST http://localhost:3000/checkoutpage`` -  Go to a checkout page to view and add the necessary information to finish your purchase.

#### No existing page:

  * `` GET http://localhost:3000/notfound`` - 404 Error


# Authors

* Danilo Oliveira [Developer] - (https://github.com/DaniloWA)
* Milena Fleming [Developer] - (https://github.com/Fleemings)
* Sérgio Pinto [Developer] - (https://github.com/srg-malves)




⌨️ with ❤️ by all of us
