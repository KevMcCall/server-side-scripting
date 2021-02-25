// process.argv will print out any command line arguments.
// console.log(process.argv);
// Node executable path
// 1st index contains path to your current file.
// The rest contains whatever argument your passing.



// Combines two command line argument (strings).
// Use parse float to return a number/integer
console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));

// Adds two command line arguments (numbers).