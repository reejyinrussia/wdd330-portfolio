const API_KEY = `81286de33329481cabd43702221507`;
const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`

export default class City {
  constructor(name, app) {
    this.name = name;
    this.app = app;
  }

  async getWeather() {
    const res = await fetch(`${API_URL}&q=${this.name}`)
      
      .then(response => response.json())
    return res.current.temp_f;
  }

  async getLocalTime() {
    const res = await fetch(`${API_URL}&q=${this.name}`)

      .then(response => response.json())
    return res.current.last_updated; 
  }

  async render(ctr) {
    const temp = await this.getWeather();
    const localTime = await this.getLocalTime();
    const cityElement = document.createElement('div');
    cityElement.className = 'city-el d-flex flex-column align-items-center'
    cityElement.innerHTML = `
            <span class="city-temp">${temp}℉</span>
            <span class="city-name">${this.name}</span>
            <span class="city-time">${localTime}</span>
            <span class="city-close"><i class="fas fa-times"></i></span>        
        `
    ctr.appendChild(cityElement);
    const close = cityElement.querySelector('.city-close');
    close.addEventListener('click', () => this.app.removeCity(this))
  }

  toJSON() {
    return { name: this.name };
  }
}