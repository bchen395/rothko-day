const paintings = document.querySelectorAll("#painting")
let sliderDark = document.getElementById("myRange1");
let sliderLight= document.getElementById("myRange2");
const btn = document.querySelector("#btn");
const containerDark = document.querySelector(".slidecontainer1");
const containerLight = document.querySelector(".slidecontainer2");
containerLight.style.display = "none";

sliderDark.oninput = function() {
    switch(sliderDark.value){
        case "1":
            paintings.forEach((item) => {
                item.src="images/untitled-1969.SFMOMA.jpg";
            });
            break;
        case "2":
            paintings.forEach((item) => {
                item.src="images/untitled-1969.Kate.png";
                console.log(item.src);
            });
            break;
        case "3":
            paintings.forEach((item) => {
                item.src="images/natgallery1968.png";
                console.log(item.src);
            });
            break;
        case "4":
            paintings.forEach((item) => {
                item.src="images/foundation1968.jpg";
                console.log(item.src);
            });
            break;
        case "5":
            paintings.forEach((item) => {
                item.src="images/estate1969.png";
                console.log(item.src);
            });
            break;
        case "6":
            paintings.forEach((item) => {
                item.src="images/chris1969.jpg";
                console.log(item.src);
            });
            break;
        case "7":
            paintings.forEach((item) => {
                item.src="images/blackform1964.jpg";
                console.log(item.src);
            });
            break;
            
    }
};

sliderLight.oninput = function() {
    switch(sliderLight.value){
        case "1":
            paintings.forEach((item) => {
                item.src="images2/GreenMaroon.jpg";
            });
            break;
        case "2":
            paintings.forEach((item) => {
                item.src="images2/No12.jpg";
                console.log(item.src);
            });
            break;
        case "3":
            paintings.forEach((item) => {
                item.src="images2/OrangePink.jpg";
                console.log(item.src);
            });
            break;
        case "4":
            paintings.forEach((item) => {
                item.src="images2/OrangeYellow.png";
                console.log(item.src);
            });
            break;
        case "5":
            paintings.forEach((item) => {
                item.src="images2/RedBand.jpg";
                console.log(item.src);
            });
            break;
        case "6":
            paintings.forEach((item) => {
                item.src="images2/WhiteCloudPurple.jpg";
                console.log(item.src);
            });
            break;
        case "7":
            paintings.forEach((item) => {
                item.src="images2/YellowBlueOrange.jpg";
                console.log(item.src);
            });
            break;
            
    }
};

btn.addEventListener("click", () => {
    if (containerDark.style.display === "none"){
        containerDark.style.display = "block";
        containerLight.style.display = "none"
        paintings.forEach((item) => {
            item.src="images/untitled-1969.SFMOMA.jpg";
        });
    }
    else {
        containerLight.style.display = "block";
        containerDark.style.display = "none"
        paintings.forEach((item) => {
            item.src="images2/GreenMaroon.jpg";
        });
    } 
  });
// delete html images, add/delete