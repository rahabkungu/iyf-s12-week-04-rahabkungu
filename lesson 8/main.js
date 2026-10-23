//Array methods
const numbers = [4, -2, 15, 8, -7, 23, 1];

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

const greaterThan10 = numbers.find(n => n > 10);
console.log("First > 10:", greaterThan10 );

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log("product:", product);

const hasNegative = numbers.some(n => n < 0);
console.log("Has negative numbers?:", hasNegative);

const sortedNumbers =[...numbers].sort((a, b) => a - b);
console.log("sorted:", sortedNumbers);
console.log("original untouched:", numbers);

//object
const person = {
    firstname: "Rahab",
    lastname: "Kungu",
    age: 21,
    hobbies: ["coding", "reading"],
    address: {city: "Nairobi", country: "Kenya"}
};

console.log(person.address.city);
console.log(person["lastname"]);

person.isStudent = true;
delete person.isStudent;

const { firstname, hobbies} = person;

console.log(Object.keys(person));
console.log(Object.values(person));

//Array of objects
const students =[
  { name: "Alice", age: 22, grade: 88, major: 'CS'},
  { name: "Bob", age: 23, grade: 77, major: 'math'},
  {name: "Charlie", age: 21, grade:95, major: 'CS'},
  {name: "Diana", age: 24, grade:89, major: 'Physics'},
  { name: "Eve", age: 22, grade: 81, major: 'CS'},

]

const allNames = students.map(s => s.name);

const honorStudents = students.filter(s => s.grade >= 85);

const Charlie = students.find(s => s.name === 'Charlie');

const totalGrades = students.reduce((acc, s) => acc + s.grade, 0);
const averageGrades = totalGrades / students.length;

const csMajor = students.filter(s => s.major === 'CS');

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

const hasLowGrade = students.some(s => s.grade < 70);

const allPassing = students.every(s => s.grade >= 60);

console.log(students);
console.log(honorStudents);
console.log(Charlie);
console.log(averageGrades);
console.log(csMajor);
console.log(sortedByGrade);
console.log(hasLowGrade);
console.log(allPassing);


//Json
const postsJson = '[{"id":1, "title":"welcome","likes":12,"published":true},{"id":2,"title":"draft ideas","likes":0,"published":false},{"id":3,"title":"week 4 recap","likes":30,"published":true}]';

console.log(typeof postsJson); //"string"
const posts = JSON.parse(postsJson);
console.log(typeof posts); //"object" (array)

const publishedPosts = posts.filter(p => p.published);
console.log("published posts:", publishedPosts);

const sortedPosts = [...publishedPosts].sort((a, b) => b.lines - a.lines);
console.log("sorted posts:", sortedPosts);

const postSummaries = sortedPosts.map(p => `${p.title} (${p.lines} lines)`);
console.log("post summaries:", postSummaries);

const jsonOutput = JSON.stringify(publishedPosts);
console.log("JSON output string:", jsonOutput);