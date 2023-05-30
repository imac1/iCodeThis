let dots = document.querySelectorAll('.dot');
let numColumns = 100;
let numRows = 100;



dots.forEach(dot => {
    dot.style.gridColumn = `${Math.floor(Math.random() * 4) + 1} / ${Math.floor(Math.random() * 4) + 8}`;
    dot.style.gridRow = `${Math.floor(Math.random() * 4) + 1} / ${Math.floor(Math.random() * 4) + 8}`;
    });

// dots.forEach(function (dot) {
//     let randomColumn = Math.floor(Math.random() * numColumns) + 1;
//     let randomRow = Math.floor(Math.random() * numRows) + 1;
//     dot.style.gridColumn = randomColumn;
//     dot.style.gridRow = randomRow;
// });














// function createDots() {
// 	for (let i = 1; i <= 20; i++) {
// 		let dot = document.createElement("div");
// 		dot.classList.add("dot");
// 		dot.style.gridColumn = Math.random() < 0.5 ? "1" : "2";
// 		dot.style.gridRow = Math.random() < 0.5 ? "1" : "2";
// 		document.querySelector(".grid-container").appendChild(dot);
// 	}
// }
// window.addEventListener("load", createDots);
// // window.removeEventListener("load", createDots);
