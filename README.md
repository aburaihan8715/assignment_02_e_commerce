# assignment_02_e_commerce

## Routes for products

GET➡ api/products
<br/>
Desc: We can get all products using this route

GET➡ api/products?searchTerm=name or category or description
<br/>
Desc: We can get products based on the search term

POST➡ api/products
<br/>
Desc: We can create new products using this route

GET➡ api/products/:productId
<br/>
Desc: We can get specific products based on productId

PUT➡ api/products/:productId
<br/>
Desc: We can update specific products based on productId

DELETE➡ api/products/:productId
<br/>
Desc: We can delete specific products based on productId

## Routes for orders

GET➡ api/orders
<br/>
Desc: We can get all orders using this route

GET➡ api/orders?email=level2@programming-hero.com or others email
<br/>
Desc: We can get orders based on the email address

POST➡ api/orders
<br/>
Desc: We can create new orders using this route, during creation of new orders
product quantity will be decreased by one and if product quantity is equal zero it will throw an error.

### scripts

```js
{
    "start": "node ./dist/server.js",
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "prod": "nodemon ./dist/server.js",
    "build": "tsc",
    "lint": "npx eslint src --ignore-pattern .ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
  }
```
