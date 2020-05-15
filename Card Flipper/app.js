const selectButton = document.getElementById("select");
let flippedElement = "";

selectButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (flippedElement != "" && flippedElement.classList.contains("flipped")) {
    flippedElement.classList.remove("flipped");
  }
  let courseNumber = Math.floor(Math.random() * 8);
  let courseVariable = "courseElement";
  let courseString =
    courseVariable + '=document.getElementById("course' + courseNumber + '")';
  eval(courseString);
  courseElement.classList.add("flipped");
  flippedElement = courseElement;
});
