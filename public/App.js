import { Invoice } from "./classes/Invoice.js"; // when importing in ts we use js, because in the end the code is compiled in js. Also, update tsconfig to use es6 for modules
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// ex Interface usages
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Yoshi", "web work", 250);
// docTwo = new Payment("Mario", "plumbing work", 200);
// let docs : HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// ! ==> must be present in the dom
// const anchor = document.querySelector("a")!;
// const form = document.querySelector("form")!;
// type casting === declare dom item's type, ex htmlFormElement
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // this is a tuple, we need it to be able to use spread operator
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// GENERICS 
// reusable blocks of code which can be used with different types
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
//   }
//   let docOne = addUID({name: 'yoshi', age: 40});
//   //let docTwo = addUID('shaun');
//   console.log(docOne.name);
//   // with interfaces
//   interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
//   }
//   const docThree: Resource<object> = {
//     uid: 1, 
//     resourceName: 'person', 
//     data: { name: 'shaun' }
//   };
//   const docFour: Resource<string[]> = {
//     uid: 1, 
//     resourceName: 'shoppingList', 
//     data: ['bread', 'milk']
//   };
//   console.log(docThree, docFour);
// ENUMS
// special types that let you store a set of constants or keywords and associate them with a numeric value
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }
// console.log(docOne);
// console.log(docTwo);
// TUPLES
// similar to array but the items inside are in fixed position
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];
// let tup: [string, number, boolean] = ['ryu', 25, true];
// // tup[0] = false;
// tup[0] = 'ken';
// let student: [string, number];
// //student = [23564, 'chun-li'];
// student = ['chun-li', 23564];
