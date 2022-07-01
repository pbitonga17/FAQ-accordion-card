'use strict';

const hiddenAnswer = document.querySelectorAll('.hidden');
const arrowBtn = document.querySelectorAll('button');


function showAnswer(button) {
    hiddenAnswer.forEach(hiddenAnswer => {
        hiddenAnswer.style.display = 'none';
    })
    document.querySelector(`#${button}`).style.display = 'block';
    console.log(button)
}


/* -------------- CLICK EVENT -------------- */


arrowBtn.forEach(arrowBtn => {
    arrowBtn.onclick = function() {
        showAnswer(arrowBtn.dataset.button);
    }
})







