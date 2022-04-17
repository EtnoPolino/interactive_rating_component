const submit = document.querySelector('button');
const ratingButtons = document.querySelectorAll('li');
const beforeSubmit = document.querySelector('.beforeSubmit');
const afterSubmit = document.querySelector('.afterSubmit');
const span = document.querySelector('span');

/* -----------Add event -------------*/
ratingButtons.forEach((rating) => {
    rating.addEventListener('click', choiceRating);
});

submit.addEventListener('click', submitRating);
/* ------------------- ---------------*/

let isRatingChoosed = false;
let ratingChoosed;

function choiceRating(){
    ratingButtons.forEach((rating) => {
        rating.classList.remove('ratingSelection');
    })
    this.classList.add('ratingSelection'); 

    isRatingChoosed = true;
    ratingChoosed = this.textContent;
}


function submitRating(){

    if(!isRatingChoosed) return;  // so that it doesnt work if we dont chose a rating

    beforeSubmit.style.opacity = '0';
    afterSubmit.style.opacity = '1';
    afterSubmit.style.pointerEvents = 'auto';

    span.innerText = ratingChoosed;
    
} 









/*  
   1) Si aucune bouton n'est cliqué alors le bouton submit ne passe pas...

   quand je clique sur un rating, 
    - il va desactiver les autres... ou alors désactiver le dernier élément qui a la class
    - activer celui donc j'ai cliqué 

    
*/