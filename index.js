const entrance = document.getElementById("entrance");
entrance.addEventListener("click", onChange);

function onChange() {
  entrance.classList.remove("header__entrance");
  entrance.innerHTML = "Личный кабинет";
  entrance.classList.add("header__privet");
}
