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
let invoices = [];
invoices.forEach(invoice => invoice);
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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
