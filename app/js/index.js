/* styling */
require("styles/main.scss");

/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
import * as math from "./math";
import Animal from "./animal";
/* your imports */

// //Todo: Show Title
// logTitle("Variables");
// /* coding examples */

// //Todo: Variables
// var name = "Kham";
// var age = 23;
// var has = true;
// var empty = undefined;

// log(name+" is type: "+ typeof name)
// log(age+" is type: "+ typeof age);
// log(has+" is type: "+ typeof has);
// log(empty + " type: " + typeof empty);

// //Todo: Object
// var person = {
//   name: "John",
//   age: 23,
//   has: true,
//     birthdate: "10 / 08 / 1998",
//   address:{
//       zipcode: 123,
//       pos: "TNP 003"      
//   }
// };

// log(person + " type = " + typeof person);
// log("Json: " + JSON.stringify(person));

// log(person.name);
// log(person.age);
// log(person.has);

// //Todo: Show all values inside Person objects
// log("Object Values: " + Object.values(person));
// log(Object.values(person.address));


// //Todo: Array
// var names = ["Kham", "Yer", "John", "Lar"]
// //Todo: For Loop
// for (var i of names) {
//     log(i)
// }

// //Todo: ForEach Loop
// names.forEach(function (i,index) {
//     log( index+": "+i)
// })

// //Todo: Show Title
// logTitle("Functions");

// //Todo: Functions
// function addNum(num1,num2) {
//   log(num1 + num2);
// }

// function multiNum(num1, num2) {
//   return num1 * num2;
// }
// //Todo: Call the function (Or use function)
// addNum(2, 10);
// log(multiNum(5, 4))

// //Todo: complete functions for string
// log("KHam".toLowerCase())
// log("yer".toUpperCase())
// log("Phai Muas".endsWith("Muas"))
// log("Seepone Her".endsWith("He"))

// //Todo: Show Title
// logTitle("Map | Filter | Reduce")

// //Todo: Map
// log("Map");
// var map = [1, 2, 3, 4, 5, 6].map(function (n) {
//   return n*3;
// })
// log(map);

// //Todo: Filter
// log("Filter")
// var filter =[1, 2, 3, 4, 5,10,23,55].filter(function (n) {
//   return n>10;
// })
// log(filter);

// //Todo: Reduce
// var reduce = [1, 2, 3, 4, 5, 6].reduce(function (n, current) {
//   return n + current;
// })

// log(reduce);

// //Todo: Show Title
// logTitle("Call Back")

// function callBackExample(name, callback) {
//   log(callback(name));
// }

// callBackExample("Khamphay", function (name) {
//   return "Helllo " + name;
// })
// // //Todo: Show Title
// logTitle("export / Import")
// log(math.add(2,4))
// log(math.sub(2,4))
// log(math.divisde(2,4))
// log(math.multi(2, 4));
// log(math.PI);

// //Todo: Show Title
// logTitle("export defualt")
// var animal=new Animal();
// log(animal.getAnimal());


// //Todo: Show Title
// logTitle("Templet Literals")

// const name = "Khamphay"
// const country = "Laos"
// const age = 23

// log(`Name: ${name} Country: ${country} Age: ${age}`)


// //Todo: Show Title
// logTitle("Spread Operator")
// log("Spread Operator Array")
// const arrayOne = ["Khamphay", "SeePhone", "Yer"];
// const arrayTwo = ['Mous', 'Her', 'Xiong']

// const concat = [...arrayOne, ...arrayTwo]

// concat.forEach(function (n) {
//     log(n)
// })

// const name = "Khamphay"
// const spreadName=[...name]
// spreadName.forEach(function (n) {
//     log(n)
// })

// const addNum = function (n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// const number = [1, 3, 7]
// const sum = addNum(...number);

// log(sum);


// log("Spread Operator Object");

// const address = {
//     city: "Vietien",
//     country:"Laos",
//     zipcode: 231
// }

// const names = {
//     firstName: 'Khamphay',
//     lastName: 'Mouas'
// }

// const persons = { ...names, ...address }
// log(JSON.stringify(persons, null, 2));


// //Todo: Show Title
// logTitle("Enhanced Object Properties")
//  //Todo: Object
// const myObject_1 = name => { //TODO: Full funtion '=funtion(name){}'
//     return {
//       name: name,
//         add: function (num1, num2) {
//             return num1 + num2;
//       },
//     };
// }

// //Todo: Or
// const myObject_2 = (name) => {
//   //TODO: Full funtion '=funtion(name){}'
//   return {
//     name,
//     add(num1, num2) {
//       return num1 + num2;
//     },
//   };
// };


// //Todo: Enhanced 'myObject_1'
// const enh_obj_1 = myObject_1("khamphay");
// log(enh_obj_1.name);
// log(enh_obj_1.add(20, 4));

// //Todo: Enhanced 'myObject_2'
// const enh_obj_2 = myObject_2("Yer Xiong")
// log(enh_obj_2.name);
// log(enh_obj_2.add(20,20))

// //Todo: Show Title
logTitle("Gennerators")
const getGenerator = function* () {
  yield 1;
  yield "Hello";
  yield true;
  yield { name: "Khamphay" };
  return "done" 
}
 
const numbersGen = getGenerator();

log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(JSON.stringify(numbersGen.next().value));
log(numbersGen.next().value);