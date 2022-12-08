//Day 1

/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
const panic = str => {
  const newStr = str.toUpperCase().split(" ");
  if (newStr.length <= 1) return `${newStr}!`;
  return (
    newStr
      .slice(0, newStr.length - 1)
      .map(elem => `${elem} 😱 `)
      .join("") +
    newStr[newStr.length - 1] +
    "!"
  );
};

// Test your function
// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"))
// console.log(panic("hello"))

//Day 2:

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date.

//example data:
[
  {
    "name":{
      "title":"Mr",
      "first":"Levent",
      "last":"Busser"
    },
    "dob":{
      "date":"1971-08-21T01:08:00.099Z",
      "age":51
    }
  },
]
*/

function transformData(data) {
  return data.map(elem => {
    return {
      fullName: `${elem.name.last} ${elem.name.first}`,
      birthday: new Date(elem.dob.date).toDateString(),
    };
  });
}
//
// use toDateString method for date parsing:
//console.log(new Date(data).toDateString());

// Day 3:

/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

//HTML
{
  /* <html>
    <head>
        <link rel="stylesheet" href="index.css" />
    </head>
    <body>
        <section id="meals"></section>
        
        <script src="index.js"></script>
    </body>
</html> */
}

//JS
// const faveFoods = {
//   breakfast: 'porridge',
//   lunch: 'Pasta or Rice',
//   supper: 'pizza'
// }

// const { breakfast, lunch, supper } = faveFoods;
// const meals= document.getElementById('meals').innerHTML = `
// <p>My favourite breakfast is ${breakfast} I eat it most days.
// <br/>
// For lunch I usually eat ${lunch}.
// <br/>
// Finally, for dinner my favourite meal has got to be ${supper}
// </p>`

// Day 4

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

const whisper = str => {
  return str.endsWith("!")
    ? `shh... ${str.slice(0, [str.length - 1]).toLowerCase()}`
    : str;
};

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));
// console.log(whisper("The KITTENS are SLEEPING!"));
// console.log(whisper("Wow!"));

//Day 5:

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]

    example data:[
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
    }, 
]
*/

function getSaleItems(data) {
  const allCandy = data.filter(
    ({ item }) => item === "🍫" || item === "🍬" || item === "🍭"
  );
  return allCandy.map(({ item, price }) => ({ item, price }));
}

// console.log(getSaleItems(products));

//Day 6

function getRandomNumberOfTacos() {
  /*
  Make this function return an array that contains 
  between one and ten taco emojis 🌮
  Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
  */

  const elemCount = Math.floor(Math.random() * 10) + 1;
  const tacoTray = new Array(elemCount).fill("🌮");

  return tacoTray; // replace this empty tray array
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join("");
}

// document.getElementById("tray").innerHTML = putTacosOnTray();

// Day 7

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  return str
    .split("")
    .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter))
    .join("");
}

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

// Day 8

function validTime(str) {
  const time = str.split(":");
  if (+time[0] < 0 || +time[0] > 24) return false;
  if (+time[1] < 0 || +time[1] > 59) return false;
  return true;
}

/**
 * Jasmine tests
 */
// describe('validTime()', () => {
//   it('returns true for valid time', () => {
//       // arrange
//       const str = '13:58';

//       // act
//       const result = validTime(str);

//       // log
//       console.log("result 1: ", result);

//       // assert
//       expect(result).toBe(true);
//   });

//   it('new test', () => {
//       const str = "-24:00";

//       const result = validTime(str);

//       console.log("result 2: ", result)

//       expect(result).toBe(false);
//   })

//   it('returns false when invalid hours', () => {
//       // arrange
//       const str = '25:51';

//       // act
//       const result = validTime(str);

//       // log
//       console.log("result 1: ", result);

//       // assert
//       expect(result).toBe(false);
//   });

//   it('returns false when invalid minutes', () => {
//       // arrange
//       const str = '02:76';

//       // act
//       const result = validTime(str);

//       // log
//       console.log("result 1: ", result);

//       // assert
//       expect(result).toBe(false);
//   });
// });
