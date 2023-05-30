document.getElementById("button-blue").addEventListener("click", function () {
	console.log("button-blue");
	window.open("https://www.facebook.com/", "_blank");
});

var form = document.getElementById("form-container");
var submitBtn = document.getElementById("sign-up-btn");
var successBox = document.getElementById("success-box");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	successBox.style.display = "block";
});
