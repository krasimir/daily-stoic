const print = require("print-message");

const quotes = require("./data.json");
const quote = quotes[Math.floor(Math.random() * quotes.length)];

print(['"' + quote.text + '"', quote.author]);
