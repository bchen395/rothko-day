const paintings = document.querySelectorAll("#painting")
let slider = document.getElementById("myRange");

slider.oninput = function() {
    switch(slider.value){
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


// delete html images, add/delete