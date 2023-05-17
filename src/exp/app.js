const card = document.querySelector('.card');
const hTom = document.querySelector(".card-head h3");
const imageTom = document.querySelector(".card-head img");
const butTom = document.querySelector(".card-head button");
const logText = document.querySelector("#logText");

imageTom.addEventListener('click', (e) => {
    e.preventDefault();
    card.classList.remove("card");
    card.classList.add("card-open");

    setTimeout(() => {
        imageTom.style.width = "152px";
        imageTom.style.height =  "173px";
    }, 1000);
});