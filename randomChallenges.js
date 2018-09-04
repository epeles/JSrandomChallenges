'use strict';

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.
const persistence = num => {
    let count = 0;
    while (num.toString().length > 1) {
        num = num
        .toString()
        .split('')
        .reduce((a,b) => a * b, 1);
        count +=1;
    }
    return num;
}

//console.log(persistence(281));



function splitStrings(str){
    let pairArray = [];
    for (let i=0; i<str.length; i+=2) {
        if (i+1 < str.length){
            pairArray.push(str[i] + str[i+1]);
        } else {
            pairArray.push(str[i] + '_');
        }
    }
    return pairArray
}
//console.log(splitStrings('abcdefg'));


function divBy5And3(number){
    let sum = 0;
    for (let i=1; i<number; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i;
        }
    }
    return sum;
}
//console.log(divBy5And3(100));


function dontGiveMeFive(start, end){
    let res = [];
    for (let i=start; i<=end; i++) {
      if (!i.toString().includes('5')) {
          res.push(i);
      }
    }
    return res.length;
}
//console.log(dontGiveMeFive(4,67));

//#with reg exp
function dontGiveMeFive1(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
}

function maxMinAvg(arr) {
    //your code here 
    var max = [];
    var min = [];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    max.push(Math.max.apply(null,arr));
    min.push(Math.min.apply(null,arr));
    //arrnew.push(sum/arr.length);
    console.log(max, min); 
}
//console.log(maxMinAvg([1,2,8,34,3,6]));

const str = 'João quer comer arroz, feijão e batata';
if (str.indexOf('batata') > -1) {
  //  console.log(str.replace('batata','cenoura'));
}


const refeicao = hora => {
    const str = 'Eitan Peles quer comer arroz, feijão e batata';
    let strArr = str.split(' ');
    let res = '';
    if (strArr.indexOf('comer') > - 1) {
        res = strArr.indexOf('comer');
        if (hora > 6 && hora < 12) { 
            strArr.splice(res, 1, 'lanchar')
        }   
        else if (hora >= 12 && hora < 18) {
            strArr.splice(res, 1, 'almoçar');
        } 
        else if (hora >=18 && hora < 24) {
            strArr.splice(res, 1, 'jantar');
        }
    }
    return strArr.join(" ");
}

//console.log(refeicao(9));

//if (str.includes('comer')) {
//    result = str.slice(0,-1) + ' banana'; 
//}
//console.log(str.split(" "));



//If the last character of the sentence is a question mark, the question should end with the word "please?". 
//If a question is already polite (meaning it already ends with "please") OR the sentence is not a question, 
//​return string argument without modification.
//Solution #1
const askPolitely = sentence => { 
    if (sentence.indexOf('please?') === -1) {
        return sentence.slice(0,-1) + ' ,please?'; 
	} else {
		return sentence; //print the sentence as it is
	}
}
//console.log(askPolitely("May I ask for a favor?"));

//Solution #2
const askPolitely2 = sentence => { 
    let sentenceLen = sentence.length; 
    let checkWord = sentence.slice(-7);
	if (checkWord !== "please?") { 
        let firstHalf = sentence.slice(0, sentenceLen -= 1); 
		return firstHalf += " ,please?";
	} else {
		return sentence; //print the sentence as it is
	}
}
//console.log(askPolitely2("May I ask for a favor?"));


//Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
//Your function should return the common characters in the same order that they appear in the first argument. 
//Do not return duplicate characters and ignore whitespace in your returned string.
const commonCharacters = (string1, string2) => {
    let result = '';
    for (let i=0; i<string1.length; i++) {
      if (string2.indexOf(string1[i]) > -1) {
        if (result.indexOf(string1[i]) === -1) {
          result += string1[i];
        }
      }
    }
    return result.replace(/\s+/g, '');
};
//console.log(commonCharacters('acexivou', 'aegihobu')); // aeiou

//reverse words
const simpleReverse = str => str.split("").reverse().join("");
//console.log(simpleReverse("Eitan Peles"));


const minBills = price => {
    const bills = [100, 50, 20, 5, 1, .25, .10, .05, .01];
    let numberOfBills = 0;
    let resultStr = '';
    for (let i = 0; i < bills.length; i++) {
      if (price >= bills[i]) { //eqto o valor total for maior ou igual a cada cédula do array
        numberOfBills = Math.floor(price / bills[i]); //divide o valor total por cada cédula do array e armazena o resultado
        resultStr += `$${bills[i]} x ${numberOfBills} \n`; //vai armazenando os resultados
        price -= (bills[i] * numberOfBills); //subtrai a cédula "utilizada" até o valor ficar menor que as cédulas disponíveis no array 
      }
    }
    return resultStr;
}
//console.log(minBills(89.67)); // $100x2 $1x1 $.25x2


//given an array, output duplicate arr
const duplicate = arr => {
  let resultArr = arr.slice();
  for (let i=0; i<arr.length; i++) {
    resultArr.push(arr[i]);
  }
  return resultArr;
}

//console.log(duplicate([1, 2, 3])); // [1, 2, 1, 2]

//let cep = '22290030';
//console.log(cep.slice(0,5) + '-' + cep.slice(5));



const order = words => {
    let resultArr = [];
    let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let stringArr = words.split(" ");
    for (let i=0; i<numArr.length; i++) {
      for (let j=0; j<stringArr.length; j++) {
        if (stringArr[j].includes(numArr[i])) {
          resultArr.push(stringArr[j]);
        }
      }
    }
    return resultArr.join(" ");
} 
  
//console.log(order("is2 Thi1s ok5? T4est, 3a")); // "Thi1s is2 3a T4est"



function sayAnyCharacter() {  
    console.log(this.name + ": " + this.character);
};
var actor1 = {  
    name:"Clint Eastwood",
    character: "The Good"
};
var actor2 = {  
    name:"Lee Van Cleef",
    character: "The Bad"
};
// Clint Eastwood: The Good
//sayAnyCharacter.call(actor1);  
// Lee Van Cleef: The Bad
//sayAnyCharacter.call(actor2);



const frutas = ['maçã', 'laranja', 'pêra'];
function feira(frutas, fruta) {
    if (frutas.indexOf(fruta) === -1) {
        frutas.push(fruta);
        console.log(`A cesta atualizada ficou: ${frutas}`);
    } 
    else if (frutas.indexOf(fruta) > -1 ) {
        console.log(`${fruta} já existe na cesta de compras!`);
    }
}

//feira(frutas, 'abacaxi'); //A cesta atualizada ficou: maçã,laranja,pêra,abacaxi
//feira(frutas, 'abacaxi'); //abacaxi já existe na cesta de compras!



//let frase = 'Hello, Eitan! How are you?';
//let corte = frase.split(" "); //Split a string into an array
//let indice = corte.indexOf('Eitan!'); //armazena a posicao da palavra Eitan em indice
//corte.splice(indice, 1, 'Ilan!'); //remove a posicao de Eitan e inclui Ilan
//frase = corte.join(" "); // join the elements of an array into a string.
//The elements of the string will be separated by a specified separator and its default value is comma(, ).
//console.log(frase);


const replaceWord = phrase => {  
    let phraseArr = phrase.split(" ");  //[ 'Eu', 'sempre', 'confundi', 'vc', 'com', 'ele!' ]
    let firstIndex = phraseArr.indexOf("sempre");
    phraseArr.splice(firstIndex, 1, "nunca mais");
    phrase = phraseArr.join(" ");
    return phrase;
}
//console.log(replaceWord("Eu sempre confundi vc com ele!"));


const getAllWords = str => {
    // your code here
    let string = str.split(' ');
    if (str === '') {
        return 'The input is empty';
    } else {
    return string;
    }
}
//console.log(getAllWords('Hello? Anybody home? Think McFly... Think!'));

const range = (start, end) => {
    const arr = [];
    let remove0 = [];
    for (let i=start; i<end; i++) {
        arr.push(i);
    }
    remove0 = arr.shift();
    return arr;
}
//console.log(range(2,9));


const lastDigit = (num1, num2) => {
    let n1 = num1.toString();
    let n2 = num2.toString();
    if (n1.slice(-1) === n2.slice(-1)) {
        return `${true} 
The last digit is ${n1.slice(-1)}`;
    } else {
        return false;
    }
    
}

//console.log(lastDigit(22,32));
//OUTPUT: true


//Create the function `doYouPlayTheTheremin`. If your name starts with the letter "S" or "s", you are playing the Theremin!
const doYouPlayTheTheremin = name => {
    if (name[0].toLowerCase() === 's') {
        return `${name} plays the Theremin!`;
    } else {
        return `${name} DOES NOT play the Theremin!`;
    }
}
//console.log(doYouPlayTheTheremin('smri'));

//Write a function that takes a string of text and returns an object containing the count for each character in the string. 
const frequencyAnalysis = str => {
    return str.split('').reduce((total, letter) => {
        total[letter] = (total[letter] || 0) + 1 ;
        return total;
    }, {})
}
//console.log(frequencyAnalysis('aacab'));
// OUTPUT: {a: 2, b: 1, c: 1}


//Write a function that takes three arguments: n (number), m(number) and direction (string). 
//The function should count to n by intervals of m and return those numbers in an array.
const count = (to, interval, direction) => {
    let arr = [];
    let remove0 = [];
    if (direction === 'Up') {
      for (let i=0; i<=to; i=i+interval) {
          arr.push(i);
      }
      remove0 = arr.splice(0,1);
  }
  if (direction === 'Down') {
      for (let i=to; i>0; i=i-interval) {
          arr.push(i);
      }
  }
  return arr;
}

//console.log(count(100, 6, "Up")); //OUTPUT: [2, 4, 6, 8, 10]
//console.log(count(21, 3, "Down")); // OUTPUT: [11, 9, 7, 5, 3, 1]


//Write a function exponentiate that accepts a number and a power to raise that number to. 
//For the present, assume the power argument will always be a positive integer value.
const exponentiate = (num, power) => {
    let acc = num;
    if (power < 0) {
        return `Power must be a positive integer value!`;
    } else {
        for (let i=1; i<power; i++) {
            acc *= num;
        }
    }
    return acc;
}
//console.log(exponentiate(3,-4)); //81

//Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains
function vowelCount(str) {
    let string = str.toString().toLowerCase();
    let count = 0;
    for (let i=0; i<string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')  {
            count += 1;
        }
    }
    return count;
}
//console.log(vowelCount("Good Job"));
// OUTPUT: 3



//Create the function factorial(num) that returns the factorial of its argument.  
//The argument, num, will be a positive whole number.
function factorial(num) {
    let acc = 1;
    if (num < 0){
        return `The argument must be a positive whole number!`;
    } else {
        for (let i=1; i<num; i++) {
            acc *= i;
        }
    }    
    return acc * num;
}
//console.log(factorial(4));
  //OUTPUT: 24


function zooInventory(animals) {
    let myZoo = [];
    for (let i = 0; i < animals.length; i++) {
      let name = animals[i][0];
      let animalType = animals[i][1][0];
      let age = animals[i][1][1];
      myZoo.push(`${name} the ${animalType} is ${age}`);
    }
    return myZoo;
}
  
var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

//console.log(zooInventory(myZoo));
// OUTPUT: 
// [
//   'King Kong the gorilla is 42', 
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]


//Return the average number
const mediaReduce = numbers => {
    let soma = numbers.reduce((nums, num) => (nums + num), 0);
    return soma / numbers.length;
}

const mediaFor = numbers => {
    let soma = 0;
    for (let i=0; i<numbers.length; i++) {
        soma += numbers[i];
    }
    return soma / numbers.length;
}
//console.log(mediaFor([10,10,10]));

//Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.
const computeSumBetween = (num1, num2) => {
    let acc = 0;
    for (let i=num1; i<num2; i++) {
      acc += i;
    }
    return acc;
}
//console.log(computeSumBetween(1,7));


//Comprar na mínima e vender na máxima
function StockPicker(arr) { 
    var max_profit = -1;
    var buy_price = 0;
    var sell_price = 0;
    // this allows our loop to keep iterating the buying price until a cheap stock price is found
    var change_buy_index = true;
    // loop through list of stock prices once
    for (var i = 0; i < arr.length-1; i++) {
      // selling price is the next element in list
      sell_price = arr[i+1]; 
      // if we have not found a suitable cheap buying price yet we set the buying price equal to the current element
      if (change_buy_index) { buy_price = arr[i]; }
      // if the selling price is less than the buying price we know we cannot make a profit so we continue to the next element in the list which will be the new buying price
      if (sell_price < buy_price) {
        change_buy_index = true; 
        continue;
      }
      // if the selling price is greater than the buying price
      // we check to see if these two indices give us a better 
      // profit then what we currently have
      else { 
        var temp_profit = sell_price - buy_price;
        if (temp_profit > max_profit) { max_profit = temp_profit; }
        change_buy_index = false;
      }
    }
    console.log(`Buy: ${buy_price}. Sell: ${sell_price}`);
    return max_profit;      
  }
  
  //console.log(StockPicker([9, 11, 8, 5, 7, 10]));  



let a = [9, 11, 8, 5, 7, 10];

let maior = a.reduce((acc, num) => num > acc ? num : acc); 
let menor = a.reduce((acc, num) => num < acc ? num : acc);   
//console.log(maior, menor);

//FizzBuzz #1
const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
      let output = "";  
      if(i % 3 === 0) {
        output += 'Fizz';
      }
      if(i % 5 === 0) {
        output += 'Buzz';
      }
      if(output === "") {
        output = i;
      }
      console.log(output); 
    }
}
//console.log(fizzBuzz());

//FizzBuzz #2
const fizzbuzz2 = n => {
    for (let i=1; i<=n; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } 
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}
//fizzbuzz2(100);

//fizzbuzz #3
const fizzbuzz3 = n => {
    let c = 1;
    while (c <= n) {
        if (c % 15 === 0) {
            console.log('FizzBuzz');
        }
        else if (c % 5 === 0) {
            console.log('Buzz');
        }
        else if (c % 3 === 0) {
            console.log('Fizz');
        }
        else {
            console.log(c);
        }
    c += 1;     
    }
}
//fizzbuzz3(100);

 
//const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
//const count = fruitBasket.reduce((allFruits, fruit) => {
//  allFruits[fruit] = (allFruits[fruit] || 0) + 1;
//  //console.log(allFruits[fruit], fruit);
//  return allFruits;
//}, []);

//console.log(count);


 const students = [
    {name: 'eitan', track: 'front end development', achievements: 34, points: 89},
    {name: 'miriam', track: 'DBA', achievements: 44, points: 89},
    {name: 'ilana', track: 'java developer', achievements: 134, points: 289},
    {name: 'rafael', track: 'python developer', achievements: 34, points: 689},
    {name: 'debora', track: 'front end development', achievements: 94, points: 834}
];  

const capitalize = txt => txt[0].toUpperCase() + txt.slice(1);

//console.log(capitalize('eitan peles'));

if (students.indexOf(0) === 'eitan') {
    console.log('it exists!');
}

for (let i=0; i<students.length; i++) {
   // console.log(capitalize(students[i].name));
}


/*
const shanghai = {
    population: 14.35e6,
    longitude: '31.2000 N',
    latitude: '121.5000 E',
    country: 'CHN'
};
  
for (let key in shanghai) {
    console.log(`${key}: ${shanghai[key]}`);
}  

/*
class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; 
      this.largura = largura;
      console.log(this.largura * this.altura);
    }

    //get area() {return this.calculaArea();}   
    //calculaArea = () => this.altura * this.largura;
}
const quadrado = new Retangulo(10, 10);
console.log(Retangulo);



/*
const calculatePromise = new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000));
const addTwo = value => value + 2;
const printFinalValue = nextValue => console.log(`The next value is ${nextValue}`);
calculatePromise
.then(addTwo)
.then(printFinalValue);

/*
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}

/*

1) 	Write the code for function addNewTeachers() found on line 35. This function should receive parameter newTeachers, defined on line 52, and add the new teachers to the treehouseTeachers variable. 
 
2)	Find function printTreehouseSummary(). There is something you need to fix in this function so the console.log() on the final line of the function outputs the correct number of JavaScript courses and teachers.
 
3)	At this point, attempt to run your code by typing node let_const.js in your workspace console and hitting enter. You should receive an error message when you do this. Use the clues in this error message to fix the program so it runs.

let count = 0;
const teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];


const courses = ['Introducing JavaScript',
				'JavaScript Basics',
				'JavaScript Loops, Arrays and Objects',
				'Getting Started with ES2015',
				'JavaScript and the DOM',
				'DOM Scripting By Example'];
			

let i = courses.length;


const addNewTeachers = newTeachers => {
	// TODO: write a function that adds new teachers to the teachers array 
  teachers.push(...newTeachers);

}


const printTreehouseSummary = () => {
	// TODO: fix this function so that it prints the correct number of courses and   teachers 
	
    for (let i = 0; i < teachers.length; i++) {
	    console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
    }
	if (teachers.topicArea !== 'Javascript') {
        count +=1;
    }
    console.log(`Treehouse has ${i} JavaScript courses, and ${teachers.length - count} Javascript teachers`);
}

let newTeachers = [
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
    },
    {
		name: 'Eitan',
		topicArea: 'Python'
    },
    {
		name: 'Miriam',
		topicArea: 'Machine Learning'
	}
];


addNewTeachers(newTeachers);
printTreehouseSummary();




/*
let by3 = 0;
let by5 = 0;
let by15 = 0;
for (let i=1; i<90; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
        by15 += 1;
    }    
    else if (i % 3 === 0) {
        console.log('Fizz');
        by3 += 1;
    }    
    else if (i % 5 === 0) {
        console.log('Buzz');
        by5 += 1;
    }    
    else {
        console.log(i);
    }    
}        


/*
const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"]
      }
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"]
      }
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"]
      }
    }
];
let hobbies;
  
  // hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
  // Write your code below
result = customers
//.map(pessoal => pessoal.personal
//    .map(hobby1 => hobby1.hobbies))
    .reduce((allHobbies, hobby) => [...allHobbies, ...hobby.personal.hobbies],[]);
console.log(result);



/*
const numbers = [6, 10, 77, 23, 1, 9, 3, 98, 10, 6, 10, 23];
let acima10 = numbers.every(num => num > 0);
console.log(acima10); //true


/*
const users = [
    {
      name: 'Samir',
      age: 27,
      favoriteBooks:[
        {title: 'The Iliad'},
        {title: 'The Brothers Karamazov'}
      ]
    },
    {
      name: 'Angela',
      age: 33,
      favoriteBooks:[
        {title: 'Tenth of December'},
        {title: 'Cloud Atlas'},
        {title: 'One Hundred Years of Solitude'}
      ]
    },
    {
      name: 'Beatrice',
      age: 42,
      favoriteBooks:[
        {title: 'Candide'}
      ]
    }
];

let total = users
.map(user => user.favoriteBooks
    .map(book => book.title))
    .reduce((allFav, fav) => [...allFav, ...fav], []);
console.log(total);
//[ 'The Iliad',
//'The Brothers Karamazov',
//'Tenth of December',
//'Cloud Atlas',
//'One Hundred Years of Solitude',
//'Candide' ]


/*
const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
];    

let flat = movies.reduce((allMovies, movie) => [...allMovies, ...movie], [] );
console.log(flat);

/*
const numbers = [6, 10, 77, 23, 1, 9, 3, 98, 10, 6, 10, 23];
const add_ = [];
const count = numbers.reduce((allNum, num) => {
    allNum[num] = (allNum[num] || 0) + 1;
    return allNum;
   // add_.push(allNum[num]);
}, {});
console.log(count);
  

/*
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
}, {});
console.log(count);


/*
var seasons = ['winter', 'spring', 'summer', 'autumn'];  
var head, restArray;  
[head, tail, ...restArray] = seasons;
//console.log(head);      // => 'winter'  
console.log(restArray); // => ['spring', 'summer', 'autumn']  

const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  
let allbooks = friends.reduce((prev, curr) => [...prev, ...curr.books], [' ']);
console.log(allbooks);  

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

/*
const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];

let result = products
.filter(prod => prod.price > 10)
.reduce((allProd, prod) => allProd += prod.price,0)
.toFixed(2); //{

   // if (allProd.price > prod.price) {
   //     return allProd;
   // }
    //return prod;
//},// {price: 0}
//);
console.log(result);


/*
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;
unfinishedTasks = todos
.filter(doit => doit.done === false)
.map(doit => doit.todo);
console.log(unfinishedTasks);


/*
const authors = [
    { firstName: "Beatrix", age: 19 },
    { firstName: "Ann", age: 34 },
    { firstName: "Beverly", age: 11 },
    { firstName: "Roald", age: 23 },
    { firstName: "Lewis", age: 55 }
];

let below20 = authors.filter(author => author.age < 20)
.map(author => author.firstName);
console.log(below20);


/*
const numbers = [6, 10, 77, 23, 1, 9, 3, 98, 10, 6, 10, 23];
const withReduce = numbers.reduce((allNumbers, number) => allNumbers += number) / numbers.length;
const withMap = numbers.map(number => number).sort((a,b) => a > b);
const withMap2 = numbers.map(número => ({número})).sort((a,b) => a > b);
const withFilter = numbers
.filter(num => num < 25 || num.constructor === String)
.sort((a, b) => a > b)
.map(número => ({número}))
;
const withReduce2 = numbers.reduce((allNumbers, number)=> {
    allNumbers[number] = allNumbers[number]++ || 1;
    return allNumbers;
}, {});

console.log(withFilter);


/*
const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;
  
  // fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
  // Write your code below
  
fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);
console.log(fullAuthorNames);


/*
let numbers = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4,5,5,5,5,5];
let result = numbers.sort().reduce((allNumbers, number) => {
    console.log(allNumbers[allNumbers.length - 1]);
    if (allNumbers.length === 0 || allNumbers[allNumbers.length - 1] !== number) {
      //  console.log(allNumbers.length - 1);
     //  console.log(number);
        allNumbers.push(number);
    }
    return allNumbers;
}, []
);
//console.log(result); //[1,2,3,4,5]


/*
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

/*
let frase = "Eu sempre me confundo com Slice e Splice."  
let fraseArray = frase.split(" ");  
fraseArray.splice(1,1, "nunca mais");
frase = fraseArray.join(" ");
console.log(frase); // Eu nunca mais me confundo com Slice e Splice


const fruits = ["Banana", "Orange", "Apple", "Mango"] //.slice(0);
//fruits.splice(0, 0, 'Kiwi', 'Peach');        // Removes the first element of fruits
const sliced = fruits.slice(1);
console.log(sliced.toString());
console.log(fruits);


/*
const numbers = [3,1,2,4,5,6,7,8,9,10];
const numbers2 = [12,13,14,11];
const numbers3 = [22,89,65];
const concatenar = numbers
.map(number => number * 10)
.concat(numbers2, numbers3
    .map(number => number * 10));

console.log(concatenar.sort((a,b) => a-b).join(' -> '));
 

/*
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears = years
.filter(year => year >= 2001)
.map(year => `${year} A.D`); 
console.log(displayYears);


/*
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;
numberOf503 = phoneNumbers.reduce((qtty, code) => {
  if (code[3] === '3') {
    return qtty + 1;
  }
  return qtty;  
},0);
console.log(numberOf503);

/*
const priceToDollars = price => `$ ${price.toFixed(2)}`;
const prices = [5, 4.23, 6.4, 8.09, 3.20].map(priceToDollars);
console.log(prices); //[ '$ 5.00', '$ 4.23', '$ 6.40', '$ 8.09', '$ 3.20' ]

/*
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => day.slice(0,3));
console.log(daysOfWeek); //[ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

/*
const prices = [5, 4.23, 6.4, 8.09, 3.20].reduce((sum, price) => sum + price, 0);
console.log(prices.toFixed(2)); //26.92


/*
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => `$ ${price.toFixed(2)}`;
const money = prices.map(priceToDollars);
console.log(money); //[ '$ 5.00', '$ 4.23', '$ 6.40', '$ 8.09', '$ 3.20' ]

/*
const months = ['january', 'february', 'march', 'april', 'may'];
const capitalizedMonths = months.map(capitalized => capitalized.toUpperCase());
console.log(capitalizedMonths); //[ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY' ]

/*
const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
const priceTotal = stringPrices.map(float => parseFloat(float));
console.log(priceTotal); //[ 5.47, 3.12, 8, 5.63, 10.7 ]

/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
const multiply = numbers.map(number => number*10);
console.log(multiply); //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]


/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); //[ 2, 4, 6, 8, 10 ]

/*
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
const upperRange = percentages.filter(below50 => below50 < 50);
console.log(upperRange); //[ 34, 12, 39, 22, 24 ]

/*
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
const filteredColors = colors.filter(startF => startF[1] === 'F');
console.log(filteredColors); //[ '#FFE0F4', '#FF2D2D', '#F7FFEC' ]

/*
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];
months.forEach(capitalized => capitalizedMonths.push(capitalized.toUpperCase()));
console.log(capitalizedMonths); //[ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY' ]


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayWithS = days.filter(day => day[0] === 'S');
console.log(dayWithS); //[ 'Sunday', 'Saturday' ]


const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

percentages.forEach(below50 => {
    if (below50 < 50) {
        upperRange.push(below50);
    }
});
console.log(upperRange);


const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

alphabet.forEach(character => {
    if (character !== 'L') {
        noel.push(character);
    }
});
console.log(noel);


const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;
stringPrices.forEach(float => priceTotal += parseFloat(float));
console.log(priceTotal);  


const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];
let multiply = 0;

numbers.forEach(number => {
    multiply = number * 10;
    times10.push(multiply);
})

console.log(times10);


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];
const dayWithS = days.filter(day => day === 'S')


days.forEach((day, index) => {
    if (day.charAt(0) === 'S') { //or (day[0] === 'S')
        dayAbbreviations.push(day);
    }
    console.log(`${index+1}) ${day}`);
});
console.log(dayAbbreviations);


//days.forEach(day => dayAbbreviations.push(day.slice(0,2)));
//console.log(dayAbbreviations);

//numbers.forEach(number => times10.push(numbers));
//console.log(times10);

*/