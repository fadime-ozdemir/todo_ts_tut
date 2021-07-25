import {Invoice} from "./classes/Invoice.js"; // when importing in ts we use js, because in the end the code is compiled in js. Also, update tsconfig to use es6 for modules
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/hasFormatter.js";

// ex Interface usage
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Yoshi", "web work", 250);
// docTwo = new Payment("Mario", "plumbing work", 200);

// let docs : HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

let invoices : Invoice[] = [];
invoices.forEach(invoice => invoice)

// ! ==> must be present in the dom
// const anchor = document.querySelector("a")!;
// const form = document.querySelector("form")!;
// type casting === declare dom item's type, ex htmlFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type  = document.querySelector("#type") as HTMLSelectElement;
const toFrom  = document.querySelector("#tofrom") as HTMLInputElement;
const details  = document.querySelector("#details") as HTMLInputElement;
const amount  = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener("submit", (e: Event)=>{
    e.preventDefault();

    let doc : HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
console.log("doc", doc);

})
