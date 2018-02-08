var chalk = require("chalk");

var setCurrentOpenOrder = function (order) {
    console.log(chalk.yellow("Setting currentOpenOrder: ") + order.Exchange + " " + order.OrderType +
        " Qty: " + order.Quantity + " Limit: " + order.Limit);
};

var responseBody = function (source, jsonBody) {
    var body = JSON.parse(jsonBody);
    var success = null;
    if (body.success) {
        success = chalk.green(body.success);
    } else {
        success = chalk.red(body.success);
    }
    console.log(chalk.magentaBright(source + " response: success = ") + success + " " + jsonBody);
};

var nonScientific = function(number) {
    return Number(number).toFixed(8);
};

var logOrder = function (action, coin, market, balance, value, qty, original) {
    console.log(chalk.yellow("your " + coin + " Balance: " + this.nonScientific(balance)));
    if (original) {
        console.log(chalk.yellow("orig " + market + " " + action + ": " + this.nonScientific(original)));
    }
    console.log(chalk.yellow("your " + market + " " + action + ": " + this.nonScientific(value)));
    console.log(chalk.yellow("qty " + market + " = " + this.nonScientific(qty)));
};

var invalidArgument = function (arg) {
    console.log(chalk.red("Function argument: ") + chalk.yellow(arg) + chalk.red(" is invalid"));
};

module.exports = {
    logOrder,
    invalidArgument,
    setCurrentOpenOrder,
    nonScientific,
    responseBody
};