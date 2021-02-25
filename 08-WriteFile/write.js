// Core node package for reading and writing files.

//This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file.

// If the code experiences any errors it will log error to the console.
// Otherwise, it will print: "movies.txt was updated!"
//UTF-8 Robot to human

const fs= require('fs');
// If the code experiences any errors it will log the error to the console
fs.writeFile("movies.txt", "I Care A Lot, Starship Troopers", function(err) {

if(err) {
    return console.log(err);
}

console.log("movies.txt was updated!")
} );




// 3 arguments/parameter
//relative/file
