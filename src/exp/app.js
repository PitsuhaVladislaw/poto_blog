import openCard from "./closeCard";

const imageTom = document.querySelector(".card-head img");

const card = document.querySelector('.card');
const hTom = document.querySelector(".card-head h3");
const cardBody = document.querySelector(".card-body");
const hCardBody = document.querySelector(".card-body h5");
const galCardBody = document.getElementById("galCardBody");

imageTom.addEventListener('click', openCard(e));