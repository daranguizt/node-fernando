import axios from 'axios';
import 'colors';

class Search {
  constructor(history = []) {
    this.history = history;
  }

  get getParamsMapBox() {
    return {
      'access_token': process.env.ACCESS_TOKEN,
      'limit': 6,
      'language': 'es'
    }
  }

  get getOpenWeatherParams() {
    return {
      "appid": process.env.OPENWEATHER_KEY,
      "units": 'metric',
      "lang": "es"
    }
  }

  async city(name = '') {
    // http call
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json`,
      params: this.getParamsMapBox
    })
    const response = await instance.get();

    return response.data.features
      .map(feature => ({
        id: feature.id,
        name: feature.place_name,
        long: feature.center[0],
        lat: feature.center[1],

      }));
  }

  async weather(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          ...this.getOpenWeatherParams,
          lat,
          lon
        }
      });

      const response = await instance.get();
      return response.data.main;

    } catch (e) {
      console.log({
        error: 'WEATHER APP ERROR',
        message: e.response.data.message
      });
    }
  }

  savePlaceToHistory(name) {
    if (name && !this.history.includes(name)) {
      this.history.push(name);
    }
  }
}

export default Search;