const card = document.querySelector('.card');
const hTom = document.querySelector(".card-head h3");
const imageTom = document.querySelector(".card-head img");
const cardBody = document.querySelector(".card-body");
const hCardBody = document.querySelector(".card-body h5");
const galCardBody = document.getElementById("galCardBody");

function openCard (e) {

    e.preventDefault();
    card.classList.remove("card");
    card.classList.add("card-open");

    setTimeout(() => {
        imageTom.style.width = "152px";
        imageTom.style.height =  "173px";
        hTom.style.fontSize = "25px";
        hTom.style.lineHeight = "40px";
    }, 1000);

    setTimeout(() => {
        blcCardBody()
        console.log("work")
    }, 1300);
};

function blcCardBody() {

    cardBody.style.display = "";
    cardBody.classList.add("card-body-active");
    
    setTimeout(() => {
        hCardBody.style.display = "";
        galCardBody.style.display = "";
    }, 1000)
}

export default openCard;