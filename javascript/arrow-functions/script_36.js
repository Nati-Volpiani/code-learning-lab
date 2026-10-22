const people = [
  { name: "Leo", age: 17 },
  { name: "Mia", age: 22 },
  { name: "Tom", age: 15 }
];

const isAdult = (p) => p.age >= 18;

const addYear = (p) => ({ name: p.name, age: p.age + 1 });

const updatedAdults = people.filter(isAdult).map(addYear);

console.log(updatedAdults);

// Expected: updatedAdults return [{name: 'Mia', age: 23}]


const isAdult2 = (p) => {
  return p.age >= 18;
}

const addYear2 = (p) => {
  return { name: p.name, age: p.age + 1 }
}

const updatedAdults2 = people.filter(isAdult2).map(addYear2);

console.log(updatedAdults2);