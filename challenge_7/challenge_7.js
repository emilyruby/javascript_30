// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const is_adult = people.some(function(person) {
  const current_year = (new Date()).getFullYear();
  if (current_year - person.year >= 19) {
    return true;
  }
});

const is_adult_2 = people.some(person => (
  new Date()).getFullYear() - person.year >= 19);

  const all_adults = people.every(person => (
    new Date()).getFullYear() - person.year >= 19);

const comment = comments.find(function(comment) {
  if (comment.id = 823423) {
    return true;
  }
});

const comment_2 = comments.find(comment => comment.id = 823423);

const index = comments.findIndex(comment => commend.id = 823424);

const new_comments = [
  ...comments.slice(0,index),
  ...comments.slice(index+1)
];
