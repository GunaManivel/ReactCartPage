# React Cart page

This project is a React-based cart page application that allows users to view and manage their shopping cart. It provides functionalities to add items to the cart, adjust quantities, and remove items.

- ## Getting Started
To get started with the app, follow these steps:

- ### Clone the repository:

```bash
git clone https://github.com/GunaManivel/ShoppingCartApp.git
```
- ### Change into the project directory:
  
```bash
cd ReactCartPage
```
- ### Install the dependencies:
  
```bash
npm install
```
- ### Start the development server:
  
```bash 
npm start
```
- The app will be available at http://localhost:5173/.

## Product Data
 
  ### The app uses the following product data:

 - iPhone 9
 - iPhone X
 - Samsung Universe 9
 - OPPOF19
 - Huawei P30
  
### Each product has the following properties:

 - `id`: A unique identifier for the product
 - `title`: The name of the product
 - `description`: A brief description of the product
 - `price`: The price of the product
 - `discountPercentage`: The percentage discount off the price
 - `rating`: The average rating of the product
 - `stock`: The number of units in stock
 - `brand`: The brand of the product
 - `category`: The category to which the product belongs
 - `thumbnail`: A thumbnail image of the product
 - `images`: An array of images of the product
  
## Usage
 
The app displays a list of products, which the user can add to their cart by clicking the "Add to Cart" button. The user can view their cart by clicking the "Cart" button in the navigation bar. The user can remove items from their cart by clicking the "Remove" button next to each item.

## Components

### App Component
The `App.jsx` file serves as the entry point of the application. It sets up the React context for managing cart data and renders the CartPage component.

### CartPage Component
The `CartPage` component renders the user's shopping cart. It displays a list of items in the cart, allowing users to adjust quantities and remove items.

### Cart Component
The `Cart` component is responsible for rendering individual product cards within the cart. It displays product details such as title, description, price, rating, discount percentage, and stock. Users can add or remove items from their cart using this component.

## Built With
- React
- JavaScript
- HTML
- CSS
- Bootstrap
  
**Contributing**

Contributions are welcome! Please feel free to submit any issues or pull requests.

