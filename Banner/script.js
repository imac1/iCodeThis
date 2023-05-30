let closeBtn = document.getElementById("close");
let container = document.getElementById("banner-container");

closeBtn.addEventListener("click", function () {
	container.style.display = "none";
});

let netflixButton = document.querySelector(".watch-button");

netflixButton.addEventListener("click", function () {
	window.open("https://www.netflix.com", "_blank");
});
