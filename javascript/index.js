'use strict';

const questions = document.querySelectorAll('.question');
const hiddenAnswer = document.querySelectorAll('.hidden');
const arrowBtn = document.querySelectorAll('button');
const h2Text = document.querySelectorAll('.h2');

function showAnswer(button) {
    hiddenAnswer.forEach(hiddenAnswer => {
        hiddenAnswer.style.display = 'none';
    })
    
    document.querySelector(`#${button}`).style.display = 'block';
}


arrowBtn.forEach(arrowBtn => {
    arrowBtn.onclick = function() {
        showAnswer(this.dataset.button);
    }
})




/*arrowBtn.forEach(arrowBtn => {
    arrowBtn.addEventListener('click', () => {
        arrowBtn.style.transform = 'rotate(180deg)';
        arrowBtn.style.transition = 'all .3s ease-out';
        h2Text.forEach(h2Text => {
            h2Text.style.fontWeight = '700';
        })
        
        
        arrowBtn.addEventListener('click', () => {
            arrowBtn.style.transform = 'rotate(0 )';
            arrowBtn.style.transition = 'all .3s ease-out';
            h2Text.forEach(h2Text => {
                h2Text.style.fontWeight = 'normal';
            })
        })
    })
})*/




