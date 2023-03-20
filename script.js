const btnColors = document.querySelectorAll(".colors li");

btnColors.forEach((btnColor) => {
  btnColor.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--mainColor",
      e.target.dataset.color
    );
  });
});
