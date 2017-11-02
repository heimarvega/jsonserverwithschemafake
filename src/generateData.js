var jsf = require('json-schema-faker');
var schema = require('./data/schema.json');
var fs = require('fs');
var sample = jsf(schema);

const json = JSON.stringify(sample);
fs.writeFile("./src/data/db.json", json, err => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Mock API data generated.");
    }
});