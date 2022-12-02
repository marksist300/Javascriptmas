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

//day 2:

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
