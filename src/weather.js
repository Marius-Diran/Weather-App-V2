const APIkey = 'a85989d2ccc1b494920a4a9758266b73';
const searchBtn = document.querySelector('.search-btn');
const locationInput = document.querySelector('.search-input');
const description = document.querySelector('.description');
const temp = document.querySelector('.temp');
const weatherCards = document.querySelector('.weather-cards');
const cityChange = document.querySelector('.cities');
const city = locationInput.value.trim();

searchBtn.addEventListener('click', () => {
  if (locationInput) {
    getWeather(locationInput)
  }
});

locationInput.addEventListener('keyup', (e)=> {
  if (e.key === 'Enter') {
    if (locationInput.value.trim().length > 0) {
      cityChange.innerHTML = e.target.value;
    }
  }
})

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
    .then((response) => response.json()).then(json => {
      switch (json.weather[0].main){
        case 'clear':
          image.src = 'assets/sunlight.png';
          break;
          
        case 'cloudy':
          image.src = 'assets/cloudy.png';
          break;

        case 'rain':
          Image.src = 'assets/rain.png';
          break;
        
        case 'windy':
          image.src = 'assets/windy.png';
          break;

        case 'windy-rain':
          image.src = 'assets/windy-rain.png';
          break;

        case 'cloudy-cloud-rain':
          image.src = 'assets/cloudy-cloud-rain.png'
          break;
      }

      temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    });
}