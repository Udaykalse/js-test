const button = document.getElementById("stop-Btn");
function getTime() {
  const currentTime = new Date();
  const result = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = result;
  console.log(result);
}

let interval = setInterval(getTime, 1000);

button.addEventListener("click", () => clearInterval(interval));
