import City from "./city.js";
import { saveToStore, readFromStore } from "./utils.js"

class App {
  constructor(element) {
    this.element = element;
    
    let cities = readFromStore('cities');
    
    this.cities = cities.map(c => new City(c.name, this));
    this.render();
  }

  addCity(c) {
    this.cities.push(c);
    this.render();
    saveToStore('cities', this.cities);
  }

  removeCity(c) {
    this.cities = this.cities.filter(city => city.name !== c.name);
    this.render();
    saveToStore('cities', this.cities);
  }

  render() {
    this.element.innerHTML = '';
    this.cities.forEach(city => city.render(this.element))
  }
}

const app = new App(document.querySelector('.weather-locations'));

const input = document.querySelector('#cityName')
const saveBtn = document.querySelector('#saveCity');
saveBtn.addEventListener('click', () => {
  addCity();
})
// input.addEventListener('keypress', (ev) => {
//   if (ev.key === 'Enter') {
//     addCity();
//   }
// })
// modal.addEventListener('shown.bs.modal', () => {
//   input.focus();
// })

function addCity() {
  const city = new City(input.value, app);
  app.addCity(city);
  bootstrapModal.hide();
  input.value = '';
}