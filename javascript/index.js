'use strict';

const arrowBtn = document.querySelectorAll('.btn');
const hiddenAnswer = document.querySelectorAll('.answer');

let x;

arrowBtn.forEach(arrowBtn => {
    arrowBtn.addEventListener('click', () => {
        hiddenAnswer.forEach(hiddenAnswer => {
            hiddenAnswer.classList.remove('hidden');
        })
    })
})
