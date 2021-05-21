let bulb = document.querySelector("#bulb");
bulb.addEventListener("click", function (e) {
  e.target.classList.toggle("bulb-on");
});
