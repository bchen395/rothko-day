const paintings = document.querySelectorAll("#painting")
const change = document.querySelector("button");
let num = 1;
change.addEventListener("click", () => {
    if (num===1){
        num = 2;
    }
    else if (num===2) {
        num = 1;
    }
    console.log(num);
    switch(num){
        case 1:
            paintings.forEach((item) => {
                item.src="images/untitled-1969.Kate.png";
            });
            break;
        case 2:
            paintings.forEach((item) => {
                item.src="images/untitled-1969.SFMOMA.jpg";
            });
            break;
    }
});


// delete html images, add/delete