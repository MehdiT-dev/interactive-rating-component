const form = document.querySelector('form');
const ratingSelectedP = document.querySelector('.rating-selected');
const cards = document.querySelectorAll('.card');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let userRating = document.querySelector('input[name="rating"]:checked').id;
    ratingSelectedP.innerText = `You selected ${userRating} out of 5`;
    
    cards.forEach(card => {
        card.classList.toggle('hiden');
    });
});