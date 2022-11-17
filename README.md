# Furniture store
___
## About:
### Foreword
Hello) This application was created as an online store, with which you can buy any furniture products, search for the ones you need by name, choose the quantity and color, place an order without leaving your home. At the moment, upholstered furniture, sofas, armchairs and chairs are available, in the future it is planned to expand the range of products.

### Technology stack:
This application was planned to be done exclusively on the client side, but as my plans grew, it became necessary to develop a small backend and database, besides, this is a good experience for me in terms of understanding how it all works in practice :)

So, the product development was carried out using the following technologies and dependencies:

***Client side***:
+ Vue.js (framework and main tool for developing the clint part)
+ Vuex (global storage in which we can store data for reuse in other components)
+ Vue-router (
router with which we can create single page applications)
+ Swiper (small library for creating dynamic sliders)
+ persistedstate (to save data to localstorage)
  
***Server side:***
+ Node.js 
+ Express (web framework for creating the server side of the application on the Node.js platform, you can run the server, send queries to the database and generate api)
+ Mongodb (Lightweight, document-oriented database)
+ Mongoose (library that simplifies interaction with the database)
___
## Appearance and Functionality:
### Main page: 
1)
![mainPage](https://i.ibb.co/LpFnvzz/mainPage.png)

Here we can see the main page, a minimalistic design (don't forget that the application is still under development and will be developed and added new features), a header with a logo, several links and functional icons that allow you to log in or go to the shopping cart

2)
![mainPageBottom](https://i.ibb.co/qd2ghKG/Main-Page-Bottom.png)


Some parts of the body and a footer containing a logo and some links containing information about the site as well as social networks.
### Store page:
3)
![storePage](https://i.ibb.co/hyCby6F/Store-Page.png)

Page with currently available products, we can view the entire product list, name, type and price

4)
![storePageFilter](https://i.ibb.co/NNWr3RS/Store-Filters.png)

You can also use filters to make it easier to find the desired products, you can filter the product by price or type

5)
![storePageSearch](https://i.ibb.co/cvXPHmB/Store-Search.png)

Also, if the filters are not effective, you can use the usual search by entering the name of the desired product:)

### Product page:
6)
![productPage](https://i.ibb.co/GQxCmCr/Product-Page.png)

 By clicking on "choose options" on the store page, you can get to the page of the selected product and see in more detail its characteristics, appearance and description

7)
![productPageQuantity](https://i.ibb.co/hy51g3C/Product-Quantity.png)

We can also determine the number of products that we want to add to the cart

### Cart page:
8)
![cartPage](https://i.ibb.co/cr4ZF2z/Cart.png)

Finally, we can go to the cart and see the list of selected items, the price for the total quantity of one item and the price for all items in the cart, we can also delete any products and finally checkout in the store.

### Data API:
9)
![dataBase](https://i.ibb.co/NrMhtph/database.png)

Also attached is the api of the database I created
___

## Documentation & links:
+ First of all, of course it is [official Vue documentation](https://vuejs.org/guide/introduction.html),
[router](https://router.vuejs.org/) and [vuex store](https://vuex.vuejs.org/guide/)
+ everything about vue.js on [ stackoverflow](https://stackoverflow.com/questions/tagged/vue.js)
+ Useful videos and authors of YouTube channels [JavaScriptNinja](https://www.youtube.com/@JavaScriptNinja), [UlbiTv](https://www.youtube.com/c/UlbiTV) and [Vladilen Minin](https://www.youtube.com/@VladilenMinin)

___
## Notes

This project is still in development, there are a list of code elements that should be improved and fixed.
A lot of functionality is to be added in the future, there are a lot of ideas.
I plan to add a JWT token to the server side and develop an advanced user authorization system with permission separation.
Thank you very much for your attention, this is my first project of this size that I am working on alone.
Below will be instructions for running the application and a link to the old repository and the history of previous commits (the old repository is also on my Bitbucket account)

My old [repo](https://bitbucket.org/rakhmanovtemur/fullstack_store/src/master/) :)
___
## Project server setup
### Open terminal and go to server folder
```
cd server
```
### Install all dependencies for server

```
npm install
```
### Run server
```
npm run dev
```
### Open new terminal and go to client side
```
cd client
```
### Install all dependencies for client
```
npm install
```
### Run client side
```
npm run serve
```
### Open and enjoy for application
```
go to http://localhost:8080/ in browser
```
### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


___