
 let canvas = document.getElementById("canvas");
 canvas.style.backgroundColor = "";


 let button = document.getElementById("button");

 button.addEventListener("click", () => {
    let  letters = "0123456789ABCDEF";
    let  color = "#";
    for (let  i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    canvas.style.backgroundColor = color;
 })