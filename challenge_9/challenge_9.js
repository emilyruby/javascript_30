const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("helo");

// Interpolated
console.log("helo im a %s", '🦄');
console.log(`hello i am ${'emily'}`);

// Styled
console.log('%c emily is the best', 'font-size: 25px;');

// warning!
console.warn('wassup ho');

// Error :|
console.error('bro u fucked up tho');

// Info
console.info('u suck');

// Testing
console.assert(1 === 2, "that is wrong");

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this dogs name is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`that is ${dog.age * 7} in dog years`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Emily');
console.count('Emily');
console.count('Emily');
console.count('Emily');
console.count('Emily');

// timing
console.time('fetching data innit');
fetch('https://api.github.com/users/emilyruby/repos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data innit');
    console.log(data);
  })
