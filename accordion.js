const buttonClick = document.querySelectorAll(".item");

for (let x of buttonClick) {
  let classes = x.classList;
  if ("open" in classes) {
    x.addEventListener("click", function () {
      classes.remove("open");
    });
  } else {
    x.addEventListener("click", function () {
      classes.add("open");
    });
  }
}
