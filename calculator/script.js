let one = document.getElementById("one");
let two = document.getElementById("two");
let equal = document.getElementById("equal");
let c = document.getElementById("C");
let add = document.getElementById("add");
let screen = document.getElementById("screen");
let nrs = document.querySelectorAll(".nr");

let clickedElements = [];

function addToArray(element) {
  let result = 0
  result = result + element
  // clickedElements.push(element);
  // console.log(clickedElements);
  // console.log(eval(clickedElements))
  console.log(eval(result))
}

one.addEventListener("click", function() {
  addToArray(+one.innerHTML);
});
document.getElementById("two").addEventListener("click", function() {
  addToArray(+two.innerHTML);
});
document.getElementById("add").addEventListener("click", function() {
  addToArray(add.innerHTML);
});


