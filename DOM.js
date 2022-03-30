const sub = document.getElementById("subtitle");
const titl = document.getElementsByClassName("title");
const wpBody = document.getElementsByTagName("body");

const qs = document.querySelector("section #wildB");

const butt = document.getElementById("wildB");

const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const submitInput = document.getElementById("subBtn");

let nameInputText = nameInput.value;
let emailInputText = emailInput.value;
let passInputText = passInput.value;

form.addEventListener("submit", (ev)=>{

    ev.preventDefault();

    if(nameInputText !== "" && emailInputText !== "" && passInputText != ""){
        
        console.log(nameInputText);
        console.log(emailInputText);
        console.log(passInputText);
    }

    else{
        alert("Completa todos los campos");
    }
});

console.log(sub.textContent);
console.log(titl[0].textContent);

console.log(qs);


sub.style.fontSize = "20px";

butt.addEventListener("click", (ev)=>{

    console.log(butt);

});

