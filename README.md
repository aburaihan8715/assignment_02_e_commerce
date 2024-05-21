# assignment_02_e_commerce

## Routes for products

GET➡ api/products
Desc: We can get all products using this route

GET➡ api/products?searchTerm=name or category or description
Desc: We can get products based on the search term

POST➡ api/products
Desc: We can create new products using this route

GET➡ api/products/:productId
Desc: We can get specific products based on productId

PUT➡ api/products/:productId
Desc: We can update specific products based on productId

DELETE➡ api/products/:productId
Desc: We can delete specific products based on productId

## Routes for orders

GET➡ api/orders
Desc: We can get all orders using this route

GET➡ api/orders?email=level2@programming-hero.com or others email
Desc: We can get orders based on the email address

POST➡ api/orders
Desc: We can create new orders using this route, during creation of new orders
product quantity will be decreased by one and if product quantity is equal zero it will throw an error.
