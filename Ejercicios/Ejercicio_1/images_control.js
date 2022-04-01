const overlay = document.getElementById("overlay_area");
const guitarImages = document.getElementsByClassName("guitar_image");
let showcase_area = document.getElementById("showcase_area");


for (let index = 0; index < guitarImages.length; index++) {
    const element = guitarImages[index];

    element.addEventListener("click", (ev)=>{
        
        showcase_area.innerHTML = "";

        console.log(ev);
        console.log(element.src);

        let showcaseDiv = document.createElement("div");
        showcaseDiv.className = "frontShowcase";

        showcaseDiv.innerHTML = 
        `
            <img src="${element.src}"> 
            <button class="overlay_close_button" id="overlay_close_button">X</button>
        `;

        showcase_area.appendChild(showcaseDiv);

        //overlay.style.zIndex = "1";
    
    });

    
}
