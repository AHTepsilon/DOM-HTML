const form = document.getElementById("form");

const elementName = form.name;
const elementDescription = form.description;
const elementImage = form.image;
const elementPrice = form.price;
const elementColor = form.color;
const elementStock = form.stock;
const elementSubmit = document.getElementById("form_element_submit");

let productsArr = [];

const div_products_in_page = document.getElementById("products_area");

form.addEventListener("submit", (ev) =>{
       
        ev.preventDefault();

        div_products_in_page.innerHTML = "";

        let product = {
            name: elementName.value,
            description: elementDescription.value,
            image: elementImage.files[0],
            price: elementPrice.value + ".00$",
            color: elementColor.value,
            stock: elementStock.checked
        }

        if(product.name !== "" && product.description !== "" && product.image !== "" && elementPrice.value > 0 && product.color !== ""){

            productsArr.push(product);
        
            productsArr.forEach((p) => {
                console.log(p);
    
                const productDiv = document.createElement("div");
    
                const availability = p.stock ? "DISPONIBLE" : "NO DISPONIBLE";
    
                productDiv.innerHTML = 
                
                `
                    <h2>${p.name}</h2>
                    <p>${p.description}</p>
                    <p>${p.price}</p>
                    <p>${p.color}</p>
                    <img src="${p.image}">
                    <p>${availability}</p>
                `
    
                div_products_in_page.appendChild(productDiv);
            });
        }

        else{
            alert("Todos los campos deben estar llenos");
        }
        
});