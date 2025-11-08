# Mock E-Commerce Cart - Backend

This is the backend of the Mock E-Commerce Cart project. It provides API endpoints for products, cart, and checkout features.

## 🔧 Tech Used
- Node.js
- Express.js

## 📌 Features
- Get all products
- Add / Remove items from cart
- Checkout cart items

## 🚀 How to Run

1. Go to the backend folder:
```bash
cd backend

Install dependencies:

npm install


Start the server:

npm start


Server runs on:
http://localhost:4000

```

🧪 API Endpoints (Use in Postman)

To test the backend in Postman, use the base URL:
http://localhost:4000

For products, use the GET request: http://localhost:4000/api/products to get the list of all products.

For cart operations, you can use:

GET http://localhost:4000/api/cart to view all items added to the cart,

POST http://localhost:4000/api/cart to add a new item to the cart, and

DELETE http://localhost:4000/api/cart/:id to remove a specific item from the cart by its ID.

For checkout, send a POST request to http://localhost:4000/api/checkout to complete the purchase and clear the cart items.

You can now use these endpoints in Postman to test your backend.