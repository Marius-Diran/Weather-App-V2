const APIkey = 'a85989d2ccc1b494920a4a9758266b73';
const searchBtn = document.querySelector('.search-btn');
const locationInput = document.querySelector('.search-input');
const description = document.querySelector('.description');
const temps = document.querySelector('.temp');
const weatherCards = document.querySelector('.weather-cards');
const cityChange = document.querySelector('.cities');


searchBtn.addEventListener('click', () => {
  getWeather()
  if (locationInput.value.trim().length > 0) {
    cityChange.innerHTML = locationInput.value;
  }
});

locationInput.addEventListener('keyup', (e)=> {
  if (e.key === 'Enter') {
    getWeather()
    if (locationInput.value.trim().length > 0) {
      cityChange.innerHTML = e.target.value;
    }
  }
})

function getWeather() {
  const city = locationInput.value.trim()
  const image = document.querySelector('.weather-icon');
  const today = document.querySelector('.date');
  let time = document.querySelector('.time');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

  fetch(url)
    .then((response) => response.json()).then(json => {

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'assets/sun.png';
          break;
          
        case 'Clouds':
          image.src = 'assets/cloudy.png';
          break;

        case 'Rain':
          image.src = 'assets/heavy-rain.png';
          break;
        
        case 'Snow':
          image.src = 'assets/snow.png';
          break;

        case 'Drizzle':
          image.src = 'assets/drizzle.png';
          break;

        case 'Thunderstorm':
          image.src = 'assets/thunderstorm.png'
          break;

        default:
          image.src = 'assets/sun.png';
          break;
      }

      temps.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`.charAt(0).toUpperCase() + `${json.weather[0].description}`.slice(1);
      today.innerHTML = new Date().toDateString().slice(0, 10);
      time.innerHTML = new Date().getUTCHours() + ':' + new Date().getUTCMinutes();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}