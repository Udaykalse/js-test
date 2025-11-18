const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");

const cityName = document.getElementById("city-Name");
const cityTime = document.getElementById("city-Time");
const cityTemp = document.getElementById("city-Temp");

async function getData(cityName) {
  const cityInputData =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=09424607f6814b8c808104021251711&q=${cityName}&aqi=yes
`);

  return await cityInputData.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name} , ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c}`;
});
