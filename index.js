const container = document.querySelector(".container");
const widget = document.querySelector(".widget");

widget.addEventListener("click", function (e) {
  const data = e.target.getAttribute("data");
  const containerShiftByTop = parseInt(data) * 100 - 100;
  container.style.top = `-${containerShiftByTop}vh`;
  console.log(data);
});

