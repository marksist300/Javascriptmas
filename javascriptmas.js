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

// Day 9

/* toTitleCase
Write a function that will capitalize every word in a sentence.  
  Example Input: "everything, everywhere, all at once"
  Example Output: "Everything, Everywhere, All At Once"
First, write a function that takes in one word and 
capitalizes the first letter of that word.
  Example Input: "scrimba"
  Example Output: "Scrimba"
Hint: Trying using slice() and .toUpperCase()
*/
function capitalizeWord(word) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
}
/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(" ")
    .map(word => capitalizeWord(word))
    .join(" ");
}
// Test your functions
// console.log(capitalizeWord("pumpkin"));
// console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

// Day 10

function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}

/**
 * Tests
 */
// describe('sortByLength()', () => {
//   it('sorts the strings from shortest to longest', () => {
//       // arrange
//       const strs = ["abc", "", "aaa", "a", "zz"];

//       // act
//       const result = sortByLength(strs);

//       // log
//       console.log("result: ", result);

//       // assert
//       expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
//   });
// });

// Day 11

/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

function reverseString(arr) {
  return arr.split("").reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr) {
  return arr.map(str => reverseString(str));
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));

// day 12

/* Challenge 2: Breakfast Menu
- Topic: .map()
Our restaurant menu currently only shows the breakfast menu, 
as it has been hard coded into the HTML file. However, we want 
to offer a dinner menu instead. Let's fix this using .map()

1. First, fetch a reference to the menu <section> from the DOM. 
2. Set the innerHTML content of the menu <section> to...
3. the dinnerFoods array by mapping over the array and returning 
the following div for each food in the array: 
`<div class="food">FOOD VALUE HERE</div>` 
4. Remember to remove any separating commas between the food divs!
*/

const dinnerFoods = ["🍝", "🍔", "🌮"];
const menu = document.getElementById("menu");
const meal = dinnerFoods
  .map(item => `<div class="food">${item}</div>`)
  .join("");
menu.innerHTML = meal;

// Day 13

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  if (word[0] === ":" && word[word.length - 1] === ":") {
    const emojKey = word.slice(1, word.length - 1);
    return emojis[emojKey] ? emojis[emojKey] : emojKey;
  }
  return word;
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(" ")
    .map(word => emojifyWord(word))
    .join(" ");
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

// Day 14

function countVowelConsonant(str) {
  return str.split("").reduce((ttl, curr) => {
    if (curr.match(/[aeiou]/)) {
      ttl += 1;
    } else ttl += 2;
    return ttl;
  }, 0);
}

// Day 15

function isPalindrome(str) {
  const checkWord = str.toLowerCase().split("").reverse().join("");
  return checkWord === str ? true : false;
}

// Day 16

function insertDashes(arr) {
  return arr
    .split(" ")
    .map(elem => [...elem].join("-"))
    .join(" ");
}

/**
 * Test Suite
 */
/*
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";
      
      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});
*/

// Day 17

/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟", ["Hello", ["HAHA", "it's", ["Me!"]]]],
  "🐟",
];

//method 1
function flatten(arr) {
  return arr.flat(Infinity);
}

// method 2
const flatten = arr => {
  const result = [];
  arr.forEach((elem, i) => {
    if (Array.isArray(elem)) {
      result.push(...flatten(elem));
    } else {
      result.push(elem);
    }
  });
  return result;
};

// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));

// Day 18

function candies(children, candy) {
  return Math.floor(candy / children) * children;
}

/**
 * Test Suite
 */
// describe('candies()', () => {
//   it('returns ammount of total equal candy to be eaten', () => {
//       // arrange
//       const children = 3;
//       const candy = 10;

//       // act
//       const result = candies(children, candy);

//       // log
//       console.log("result: ", result);

//       // assert
//       expect(result).toBe(9);
//   });
//   it('returns ammount of total equal candy to be eaten', () => {
//       // arrange
//       const children = 4;
//       const candy = 10;

//       // act
//       const result = candies(children, candy);

//       // log
//       console.log("result: ", result);

//       // assert
//       expect(result).toBe(8);
//   });
//   it('returns ammount of total equal candy to be eaten', () => {
//       // arrange
//       const children = 5;
//       const candy = 15;

//       // act
//       const result = candies(children, candy);

//       // log
//       console.log("result: ", result);

//       // assert
//       expect(result).toBe(15);
//   });
// });

// Day 19
function centuryFromYear(num) {
  const century = Math.floor(String(num).slice(0, 2));
  return century === 19 ? 20 : century;
}

/**
 * Test Suite
 */
// describe('centuryFromYear()', () => {
//   it('returns current century', () => {
//       // arrange
//       const year = 1905;

//       // act
//       const result = centuryFromYear(year);

//       // log
//       console.log("result 1: ", result);

//       // assert
//       expect(result).toBe(20);
//   });

//   it('returns current century for edge case of start of century', () => {
//       // arrange
//       const year = 1700;

//       // act
//       const result = centuryFromYear(year);

//       // log
//       console.log("result 2: ", result);

//       // assert
//       expect(result).toBe(17);
//   });
// });

// Day 20

import podcasts from "./data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data) {
  return data
    .filter(pod => pod.paid === false)
    .map(freeCast => ({
      title: freeCast.title,
      rating: freeCast.rating,
      paid: freeCast.paid,
    }));
}

console.log(getFreePodcasts(podcasts));
