-- Disable foreign key checks
SET FOREIGN_KEY_CHECKS = 0;

-- Drop existing tables
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Cart;
DROP TABLE IF EXISTS CartItem;
DROP TABLE IF EXISTS `Order`;
DROP TABLE IF EXISTS OrderItem;
DROP TABLE IF EXISTS Address;
DROP TABLE IF EXISTS PromoCode;
DROP TABLE IF EXISTS Blog;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- Create User table
CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    RegistrationDate DATE NOT NULL,
    IsPreBooking BOOLEAN NOT NULL DEFAULT FALSE
);

-- Create Product table
CREATE TABLE Product (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Tag VARCHAR(100),
    ImageUrl VARCHAR(255),
    StockQuantity INT NOT NULL
);

-- Create Cart table
CREATE TABLE Cart (
    CartID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Create CartItem table
CREATE TABLE CartItem (
    CartItemID INT PRIMARY KEY AUTO_INCREMENT,
    CartID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CartID) REFERENCES Cart(CartID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

-- Create Order table
CREATE TABLE `Order` (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    OrderDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    DiscountAmount DECIMAL(10, 2) NOT NULL DEFAULT 0,
    FinalAmount DECIMAL(10, 2) NOT NULL,
    PaymentMethod VARCHAR(50) NOT NULL,
    Status VARCHAR(50) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Create OrderItem table
CREATE TABLE OrderItem (
    OrderItemID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

-- Create Address table
CREATE TABLE Address (
    AddressID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    StreetAddress VARCHAR(255) NOT NULL,
    City VARCHAR(100) NOT NULL,
    State VARCHAR(100) NOT NULL,
    PostalCode VARCHAR(20) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Create PromoCode table
CREATE TABLE PromoCode (
    PromoCodeID INT PRIMARY KEY AUTO_INCREMENT,
    Code VARCHAR(50) NOT NULL UNIQUE,
    DiscountPercentage DECIMAL(5, 2) NOT NULL,
    ValidFrom DATE NOT NULL,
    ValidTo DATE NOT NULL
);

-- Create Blog table
CREATE TABLE Blog (
    BlogID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    PublishDate DATE NOT NULL,
    AuthorID INT NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES User(UserID)
);