// start with strings, numbers and booleans
let age = 100;
let age2 = age;
age = 200;

let name = "Emily"
let name2 = name;
name = "Emilia"

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
team[3] = 'Lux';

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one day

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
const person = {
  name : "emily",
  age : 20
};

// with Objects

// and think we make a copy:
const alien = person;

// how do we take a copy instead?
Object.assign({}, person, {age : 99});

// We will hopefully soon see the object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const emily = {
  name : "emily",
  age : 20,
  social : {
    twitter : "@ermmears",
    site : "ermmears.me"
  }
}

const dev = Object.assign({}, emily);
