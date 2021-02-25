// * Make a JavaScript file called `bands.js` that exports an object of music genres and bands like this:
//   ```javascript
//   {
//     punk: 'Green Day',
//     rap: 'Run DMC',
//     classic: 'Led Zeppelin'
//   }
//   ```
// * Require this JavaScript file in `run.js`, loop over the values, and console.log them.
// * **Note**: If you are having trouble with looping through objects, please google `how to loop through objects in javascript` to get yourself in the right direction!
// * Utilize a `for/in statement` to loop through the object and call a single `console.log()` that will output all of your bands. Do not write anymore than ONE console.log() within your code (it will go inside for/in loop)
// * Make sure the program runs properly when entered into the terminal like this:
//   ```bash
//   node run.js
//   ```
// * And that the output looks something like the below:
//   ```bash
//   A punk band is Green Day
//   A rap band is Run DMC
//   A classic band is Led Zeppelin



// const genres = {
//     'Green Day': 'Green Day',
//   }

//   const genres1 = {
//     'Run DMC': 'Run DMC',
//   }

//   const genres2 = {
//     'Led Zeppelin' : 'Led Zeppelin',
//   }
  
//   const entries = Object.entries(genres)
//   const entries1 = Object.entries(genres1)
//   const entries2 = Object.entries(genres2)


//   for (const [count] of entries) {
//     console.log(`A punk band is ${count}`)
//   }

//   for (const [count] of entries1) {
//     console.log(`A rap band is ${count}`)
//   }
  
//   for (const [count] of entries2) {
//     console.log(`A classic band is ${count}`)
//   }
  
//   module.exports = {
//     genres: genres,
//     genres1: genres1,
//     genres2: genres2
// };



const myBands = {
    punk: "Green Day",
    rap: "Run DMC",
    classic: "Led Zeppelin"
};



// Module.exports written as an object
module.exports = myBands;