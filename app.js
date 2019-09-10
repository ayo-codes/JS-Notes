

/*
in the chrome console numbers are blue and strings are going to be black

be careful when calling functions and ensure you use the right capital letters
*/

/* Console.log Class - video 5

  // log to console

  //log a string
  console.log('hello bitch');

  //log a number
  console.log(123);

  //log a boolean
  console.log(true);

  //log a variable
  var greeting = 'hello world';
  console.log(greeting);

  //log an array
  console.log([1, 2, 3, 4, ]);

  //log an object literal
  console.log({a:1 , b:2});

  //create a table in the console
  console.table({a:1 , b:2});

  //create an error alert - this tends to be logged in red
  console.error('this is an error');

  //to clear the console
  console.clear()

  //console warning - this tends to be yellow
  console.warn('this is a warning ');

  //console.time is a good way to know how long something took to run in your script
  console.time('hello');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
    console.log('hello bitch');
  console.timeEnd('hello');

  //create an alert
  //alert('hello world it\'s ayo bitch');
/

//CLASS on Variables - video 6
  //var , let , const

  var name = 'John Doe';
  console.log(name);
  // you can reassign var and let but not const so in the example below ,we change the value from John doe to Joe Bloggs 
  name= 'Joe Bloggs'; 
  console.log(name);

  // It is possible to also initialise a variable without assigning  a value or anything to it but then assigning afterwards. it is usually for if/else statements
  // when calling a variable do not use quotes 

  var greet;
  console.log(greet);
  // this produces a result of undefined in the log  a value can then be assigned 

  greet='hi guys welcome to my channel'
  console.log(greet);

  //variables can only include letters , numbers, _ or $ 
  //they can not start with a number
  //multiword variables usually the camelcase method e.g var firstName 
  // var FirstName this is called pascal case

  //LET
  //it works similar to Var and has all the functions as above 
  //Vs code you can cmd+// to comment out multiple things

  let nom = 'John Doe';
  console.log(nom);
  nom= 'Joe Bloggs';
  console.log(nom);

  //CONST
  //once assigned it can't be reassigned
  //you need to declare the value immediately so you can not have it as undefined 

  const oruko = 'Bola';
  console.log(oruko)
  //once this is assigned to oruko you can not change it especially if it is assigned to primitive values like strings or numbers 
  //if it is an object though , the property values may be changed . it can not be changed.

  const eyan = {
    oruko: 'Bisi',
    ojoOri: 34,
  }
  console.log(eyan)

  // the property of oruko and ojoOri can be changed

  eyan.oruko = 'laitan';
  eyan.ojoOri = 33;
  console.log(eyan);

  //for const you can modify the property values of arrays also for example

  const nomba =[1, 2 , 3, 4, 5,]
  console.log(nomba)
  // we can add on an extra number to the array above but you can not reassign new number array but you can modify
  nomba.push(8);
  console.log(nomba);
/
 

//Data types lecture -  video 7
  // six primitive data types - strings , number , boolean , null, undefined , symbols
  //reference type data - arrays , object literals , functions , dates , anything else 
  //using the operator typeof
  //PRIMITIVE
  //string
  const names = 'bisi olatilo';

  //Number - if you put quotes around a number it becomes a string
  const ages = 22

  //boolean - do not put quotes around them either if not they turn to string
  const haskids = true;

  //null - this returns a typeof called object but this is a bug within javascript as it is really a null be aware
  const car = null;

  //undefined
  let test;

  //symbol - Symbol has to be started with a Capital letter

  const sym = Symbol();

  console.log(typeof names);
  console.log(typeof ages);
  console.log(typeof haskids);
  console.log(typeof null);
  console.log(typeof test);
  console.log(typeof sym);

  //REFERENCE type
  //array - arrays need to be in quotes
  const hobbies = ['cash' , 'money' , 'food'];

  console.log(hobbies);
  console.log(typeof hobbies);

  //object literal
  const address = {
    city: 'ikeja',
    state: 'lagos'
  }
  console.log(address);
  console.log(typeof address);

  //dates
  const today = new Date();
 
  console.log(today);
  console.log(typeof today);

/

//Type conversions - video 8
  //this is for when you need to change the typeof value from string to number for example

  let val;

  //number to string

  val =5;

  //wrapping val in a string function  - note that you do not need to put the '' around it 

  val = String(555434);

  // you can also put a string around a math expression as seen below 

  val = String(4+4);
  //you can also convert a boolean to string 

  val = String(true);

  //you can also convert  date to a string
  val = String(new Date());

  //you can also convert an array to a string 
  val = String([1 ,2 , 3, 4])

  //there is also a to string method toString() which can be used instead

  val = (5).toString();

  val = (true).toString();

  // converting strings to number

  val = Number('5');

  // converting a boolean , when you convert a boolean to number if true it gives an output of 1, if false, it gives an output of 0

  val = Number(true);
  val = Number(false);

  // converting null also gives zero

  val = Number(null);

  //converting a string to a number , this gives an out put of NaN which means not a number. This also happens when you try and do the same with an array

  val = Number('hello');

  val = Number([1, 2, 3, 4]);

  //using parseInt , parses and converts a string as an integer (full number) so even if you have a decimal it still parses it as a full number to get around this we use parsefloat

  val = parseInt('100')

  val=parseFloat('100.30454');

  //output
  console.log(val);
  console.log(typeof val);
  console.log(val.length);

  //.length -only applies to strings so when applied to a number you get a result of undefined

  //.toFixed -this function creates an answer to certain decimal places , not an error occurs if the variable you are calling isnt yet a number as it only works on numbers , in the brackets you put in the decimal places
  console.log(val.toFixed(2));

  //There is also something called type cohersion , where javascript converts one element to another then adds them together, in the example below you have a situation with 7 being converted to a string. 
  const val1 = String(5);
  const val2 = 7;
  //const sum = val1 + val2;

  //To prevent this from happening you can use Number or Parse int and this will

  const sum = Number (val1+ val2);

  console.log(sum);
  console.log(typeof sum)
/

//Numbers and the Math Object - video 9

  const num1 = 100;
  const num2 = 50;

  let val;

  //simple maths with numbers % is used to get the remainder value , it is called modulus

  val = num1 + num2;
  val = num1 * num2;
  val = num1 - num2;
  val = num1 / num2;
  val = num1 % num2;

  //Math Objects - math as an object means it has properties and it has values
  
  val = Math.PI; // converts to pie

  val = Math.round (2.4); // rounds a number

  val = Math.ceil(2.4); //this function always rounds up

  val = Math.floor(2.4); // this function always rounds down

  val = Math.sqrt(64);// finds the square root of a number

  val = Math.abs(-64); // gives the absolute number i.e the positive version

  val = Math.pow(8 ,10); // gives to the power of a number , left number is the number that is being raised , right number is the number it is raising it to ,so the example here is 8  to the power of 10.

  val = Math.min(64 , 3, 4, 6 ,7  , 0.4 , 4 ); // this gets the smallest number 

  val = Math.max(64 , 3, 4, 6 ,7  , 0.4 , 4 ); // this gets the biggest number 

  val = Math.random(); // this returns random numbers between zero and 1. 

  val = Math.random() * 20 ; // this returns random numbers between zero and 20 . You can use this , if you want to generate a random number between 0 and certain number , multiply by the certain number , eg in this case 20 . If you want it between 1 and 20 

  val = Math.random() * 20 + 1 ; // If you want it between 1 and 20 

  val = Math.floor(Math.random() * 20 + 1 ); // If you want it between 1 and 20  but also want it be a whole number, note that this will round it downwards
  console.log(val);
/

//String Methods and Concatenation - lecture 10

  const fName = 'Tobechukwu'
  const lName = 'Ogochi'
  const age9  = 31
  const story = 'hello my name is ayo and i am a boy'
  const tags = 'web , offline , online '

  let val;

  val = fName + lName // this gives an output with not space

  val = fName + ' ' + lName; // to concatenate properly ensure there are spaces between the quotes to actually have the space show up in 

  val = 'Hello my name is ' + fName + ' I am ' + age9 ; // when calling the fName or lName , there is no need to use the '' quotations since it is not the string

  // Appending - this is if you want to add something 

  val = 'ayo ' ;

  val += 'onamusi' ; // the += means val = Val + onamusi ( this is the new value) you can also include a space in the value to create the extra space

  // Escaping , in JS you can use a quote in a string as long as it doesnt match the outside string , so if it is "" on the outside you can't use it on the inside , you can use the '' on the inside. at times this is not always possible, so it is important to know how to use escaping



  //val = 'That's awesome , I can't wait'; // this will generate an error instead

  val = 'That\'s awesome , I can\'t wait'; // using the \ in front of the ' will let the browser know to ignore that, so it knows that it is not ending a string

  //properties available to strings
  // 1  .length - you do not need () when you are using a property but you do when you are using length

  val =fName.length; // this counts number of characters in the string 

  //methods available to strings -
  //1. concat()

  val = fName.concat(' ' , lName) // this is another way to do a concatenation

  //2. Change case

  val = fName.toUpperCase();  // changes to uppercase , this is a method so the () are needed 

  val = fName.toLowerCase(); // changes to lowercase

  val = fName[2]; // this calls the character number in that value , e.g 2 here calls the 3rd character since arrays are zero-based 

  // finding character position
  val = fName.indexOf ('u') ; // this gives us the first index of that particular letter in the () . it counts from the left and counts the first occurrence of that character.

  val = fName.lastIndexOf ('u') ;// this gives the last index or the last time a particular index was present . 

  //NOTE :if the character is missing it will return a result of -1

  //to find a 'character at' certain position you can use 
  val = fName.charAt('2'); //- use quotes as it is a string.

  //to get the last character of a string you can use 

  val = fName.charAt(fName.length -1 ); // this gives us the last character.

  //to get a substring() , that is to pull a substring out of your name 

  val= fName.substring(0,4); // in this example we get the substring for 'Tobe' so it counts the first character T as (0) and and the 5th character C as (4) and gives the result between them .

  //slice() - it is mainly used to pull things out of arrays but it also can be used in strings

  val =fName.slice( 0 ,4 ); // you can also use it with negative numbers  and this counts from the back

  val =fName.slice( -2  ); // you can also use it with negative numbers  and this counts from the back , in this example it takes the last 2. 

  //split() - this can split a string and then it returns them into an array based on a separator. for this example we created the const story

  val = story.split(' ') // if you just leave the quote to be no space '' then it will split every character  but if you put a space ' ' then it splits the words into arrays . in this example you end up with an array with 10 objects. 

  val = tags.split(',') // this will split the tags  based on the commas into an array.

  //replace() - this is used to replace something inside a string 

  val =story.replace('ayo', ' joy')  // if you leave the second option , in this case joy blank , it will replace it with a blank rather than a word. so it can be used to omit something I guess.

  //includes() - this gives a true or false value depending on if something is in the string 

  val = story.includes('hello'); //if hello is included the string the it will return a true value , if it isn't it will return a false value

  val = story.includes('ghose'); //if ghose is included the string the it will return a true value , if it isn't it will return a false value


 
  console.log(val);
*/


