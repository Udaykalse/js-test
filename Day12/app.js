const button = document.getElementById("get-user-location");

async function getData(lat, long) {
  const cityInputData =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=09424607f6814b8c808104021251711&q=${lat},${long}&aqi=yes
`);

  return await cityInputData.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failedToGet() {
  console.log("There is issue");
}

button.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    gotLocation,
    failedToGet
  );
});
