const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const description = document.querySelector('.description');
const cities = document.querySelector('.cities');

searchBtn.addEventListener('click', () => {
  console.log('Button clicked');
});

searchInput.addEventListener('keyup', (e)=> {
  if (e.key === 'Enter') {
    if (searchInput.value.trim().length > 0) {
      cities.innerHTML = e.target.value;
    }
  }
})