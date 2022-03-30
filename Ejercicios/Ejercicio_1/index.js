const form = document.getElementById("form");

const elementName = form.name;
const elementDescription = form.description;
const elementImage = form.image;
const elementPrice = form.price;
const elementColor = form.color;
const elementSubmit = document.getElementById("form_element_submit");

form.addEventListener("submit", (ev) =>{
       
        ev.preventDefault();

        /*console.log(elementName.value);
        console.log(elementDescription.value);
        console.log(elementImage.value);
        console.log(elementPrice.value);
        console.log(elementColor.value);*/

        let product = {
            name: elementName.value,
            description: elementDescription.value,
            image: elementImage.value,
            price: elementPrice.value + ".00$",
            color: elementColor.value
        }
        

        console.log(product);
});