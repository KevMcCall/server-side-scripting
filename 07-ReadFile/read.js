// fs is a core Node package for reading and writing files

const fs = require('fs');
// Relative path, Utf-8, and function //
//If the code experiences any erros it will log the error to the console
fs.readFile("read.txt", "utf8", function(error, data) {

if (error) {
    return console.log(error);
}
// We will then print the contents of data
console.log(data);

// Then split it by commas (to make it mor readable)
var dataArray = data.split("*");

// We will then re-display the content as an array for later use.
console.log(dataArray);


});