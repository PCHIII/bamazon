# Bamazon: Node.js & MySQL

Built With:
* <a href="https://www.npmjs.com/package/inquirer" rel="nofollow">Inquirer NPM Package</a>
* <a href="https://www.npmjs.com/package/mysql" rel="nofollow">MySQL NPM Package</a>
* <a href="https://www.npmjs.com/package/console.table" rel="nofollow">Console.table NPM Package</a>

## Overview

This Bamazon App will take in orders from customers and deplete stock from the store's inventory. 

Also, there is a Bonus section that allows a Managers view, which allows for viewing investory, added new products and increasing supply.


## Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.


- - -

### Challenge #1: Customer View APP EXAMPLES (Minimum Requirement)
- - -
Below shows the user ordering 1 item.

![](bamazon_screenshots/bac.JPG)

- - -
Below shows the users attempting to order more then is available.
![](bamazon_screenshots/baa.JPG)

- - -
Below shows user correcting order.
![](bamazon_screenshots/bab.JPG)

- - -

### Challenge #2: Manager View APP EXAMPLES (Bonus)
- - -
Below shows Manager choices.

![](bamazon_screenshots/bamg.JPG)