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

function start() {
    inquirer.prompt(
        {
            type: 'rawlist',
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

start();