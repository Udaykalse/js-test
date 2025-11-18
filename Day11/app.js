const userInputName = document.getElementById("input-Username");
const button = document.getElementById("clickButton");
const userName = document.getElementById("user-name");

button.addEventListener("click", () => {
  const value = userInputName.value;
  localStorage.setItem("nameGojo", value);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("nameGojo");
  userName.innerText = value;
});
