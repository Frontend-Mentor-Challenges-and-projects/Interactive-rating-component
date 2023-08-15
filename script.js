"use strict"

const itm = document.querySelectorAll(".rating-item");



for (let i = 0; i < itm.length; i++) {

    itm[i].addEventListener("click", function () {
        let score = itm[i].textContent;

        localStorage.setItem("score", score);
    })
};

let xcore = document.querySelector("span");

xcore.textContent = localStorage.getItem("score");