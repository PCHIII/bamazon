drop database if exists bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bourne Identity', 'Movies', 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mission: Impossible – Fallout', 'Movies', 14, 154);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('007-Spectre', 'Movies', 12, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Costa Del Mar Fantail', 'Mens Accessories', 200, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Luminox Seal Team-6 Watch', 'Mens Accessories', 399, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Black Diamond Gloves', 'Mens Accessories', 80,6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('MEGUIARS Ultimate Wash', 'Automotive', 11, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('MEGUIARS Ultimate Wax', 'Automotive', 15, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('3-in-1 Car Phone Mount', 'Automotive', 12, 112);



SELECT * FROM products;