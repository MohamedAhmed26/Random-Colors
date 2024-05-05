let btn = document.getElementById("btn");
let div = document.getElementById("color");
btn.addEventListener("click", (eo) => {
    let random = Math.round(Math.random() * 360);
    div.style.backgroundColor = `hsl(${random}, 45%, 55%)`;
});
