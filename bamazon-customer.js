// The customer module
// Users can view a list of products to purchase

// Required node modules.
var inquirer = require('inquirer');
var mysql = require('mysql');
var table = require('console.table');

// Connects to the database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'Basilbird222',
    database: 'bamazonDB'
});


var itemArray = [];

function showInventory(){
    connection.query( "SELECT * FROM products", function (error, response){
            
            if (error){
                console.log(`There was error.`)
                return;
            }
            
            if (!error){
                for (var i = 0; i < response.length; i++){
                    itemArray.push({
                        id: response[i].item_id,
                        item: response[i].product_name,
                        price: response[i].price,
                        department: response[i].department_name,
                        inventory: response[i].stock_quantity
                    });
                }
                //call table (console.table)
                console.table(itemArray);
                askUser();
            }
        }
    )
}
// Prompt the user to select an item and how many they would like to purchase.
// check if the quantity requested by the user is in stock.
// Create the query string, update the inventory.

function askUser(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'itemChoice',
            message: 'Enter the ID of the item you are buying.'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to buy?'
        }
    ]).then(answer => {

        var item = parseInt(answer.itemChoice);

        var quantity = answer.quantity;

        connection.query(`SELECT * FROM products WHERE item_id = ${item}`, function (error, response){
            
            if (error){
                console.log(`There was an error.`);
                return;
            }
            else {
                productData = response[0];
                
                if (productData.stock_quantity >= quantity){
                    console.log(`No Problem! We have ${productData.product_name} in stock!`)
                    
                    var newTotal = productData.stock_quantity - quantity
                    
                    var price = quantity*productData.price

                    connection.query(`UPDATE products SET stock_quantity = ${newTotal} WHERE item_id = ${item}`, 
                    
                    function(error, response){
                        
                        if (error){
                            console.log(`Quantity failed.`);
                            return;
                        }
                        else {
                            console.log(`Your total cost is $${price}.`)
                            
                            var newSales = productData.product_sales + price

                            connection.query(`UPDATE products SET product_sales = ${newSales} WHERE item_id = ${item}`, 
                            
                            function(error, response){
                                
                                if (error){
                                    // console.log(`Quantity failed.`);
                                    return;
                                }
                                else {
                                    askUser();
                                }
                            })
                         }
                    })
                }
                else {
                    console.log(`Sorry, but we only have ${productData.stock_quantity} in stock!`)
                    askUser();
                }
            }
        })
    })
};

showInventory();