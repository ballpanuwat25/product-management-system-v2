
#   Product Management System v2

## Overview

Welcome to the Product Management System v2 repository! This version brings significant enhancements, including the migration from using RAM to MySQL (phpMyAdmin) for data storage. Additionally, the system has been containerized using Docker for improved deployment and scalability.

## Changes from v1

-   **Data Storage:** Transitioned from arrays in the server's RAM to a MySQL database managed by phpMyAdmin.
-   **Containerization:** Adopted Docker for a more efficient and consistent deployment environment.

## Getting Started

To use the Product Management System v2, follow these steps:

## Getting Started

To use the Product Management System, follow these steps:

1.  Clone the repository to your local machine:
    ```
    git clone https://github.com/ballpanuwat25/product-management-system-v2.git
    ```
    
2.  Navigate to the project directory:
	```
    cd product-management-system-v2
    ```
    
3.  Set up the Docker environment:
	```
    docker-compose up -d
    ```
    
    This will launch the server, and you can access the product management system via the specified port http://localhost:8000 and you can access phpMyAdmin via port http://localhost:8080 
    

## Features

### 1. Add New Products

Users can add new products by providing the product name, type, price, and stock quantity. The system will store this information in the server's RAM.

### 2. View Products

Users can view a list of all products, including their details such as name, type, price, and stock quantity.

### 3. Edit Existing Products

Users can edit existing products by modifying the product details. The changes will be reflected in the server's RAM.

### 4. Delete Existing Products

Users have the option to delete existing products from the system. This action will remove the product from the server's RAM.

## API Endpoints

The Product Management System provides the following API endpoints:

-   `GET /products`: View all products.
-   `GET /products/:id`: View details of a specific product.
-   `POST /products`: Add a new product.
-   `PATCH /products/:id`: Edit an existing product.
-   `DELETE /products/:id`: Delete an existing product.

Make sure to include the necessary data in the request body for adding and editing products.

## Technologies Used

-   Node.js
-   Express.js
-   MySQL
-   phpMyAdmin
-   Docker

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
