
const arr = [123, 'abc', false, undefined]
console.log(arr);

console.log(Array.isArray(arr));

const movies = ['pushpa 3', 'Superman : Legacy','Spiderman 4', 'Batman: Brave and Bold', 'Marco']
console.log(movies.length);
//indexing

console.log(movies[3]);
console.log(movies[movies.length -1]);
console.log(movies.indexOf('Spiderman 4'));
console.log(movies.at(-5));//negative indexing

//replacing
movies[4] = 'marco polo';
console.log(movies);

//slicing
console.log(movies.slice(1, 30));
console.log(movies.slice(-5, -1));

//ading elements
movies.push('The Dark Knight');
console.log(movies);
movies.unshift('The Dark Knight Rises');
console.log(movies);

//removieng elements
movies.pop();
movies.shift();
console.log(movies);

//splice 

// movies.splice(2, 2)//
// console.log(movies);


movies.splice(2, 0, 'The Dark Knight' , 'Drak Knight Rises')
console.log(movies);
