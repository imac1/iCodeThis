"use strict";
let cards = document.querySelectorAll(".card-1, .card-2, .card-3");
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

let currentCard = 0;
window.addEventListener('click', function() {
    cards[currentCard].style.display = "block";

})

function showCard(n) {
	cards[currentCard].style.display = "block";
}

//show next card
rightArrow.addEventListener("click", function () {
	currentCard++;
	if (currentCard > cards.length - 1) {
		currentCard = 0;
	}
	showCard(currentCard);
});

//show previous card
leftArrow.addEventListener("click", function () {
	currentCard--;
	if (currentCard < 0) {
		currentCard = cards.length - 1;
	}
	showCard(currentCard);
});

// randomBtn.addEventListener("click", function () {
// 	currentCard = Math.floor(Math.random() * cards.length);
// 	showCard(currentCard);
// });

leftArrow.addEventListener("click", () => switchCard(-1));
rightArrow.addEventListener("click", () => switchCard(1));
