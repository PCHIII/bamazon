var inquirer = require('inquirer');
var mysql = require('mysql');
var table = require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Basilbird222',
    database: 'bamazonDB'
    
});
// create an numbered list for mgrs choices
// create switch/case/breaks for each choice.
function start() {
    inquirer.prompt(
        {
            type: 'mgrList',
            name: 'query',
            message: 'What would you like to do?',
            choices: ['List Products for Sale', 'List Low Inventory', 'Add to Inventory', 'Add New Product']

        }
    ).then(answer => {
        response = answer.query;
        switch (response) {
            case 'List Products for Sale':
                showInventory();
                break;
            case 'List Low Inventory':
                showLow();
                break;
            case 'Add to Inventory':
                addItem();
                break;
            case 'Add New Product':
                createNew();
                break;
            default:
                console.log("Not a valid choice.")
        }
    });
}
// create function to show inventory from list

// create function to show low Inventory < 10

// create function to add to inventory list

// create function to add new product.



start();