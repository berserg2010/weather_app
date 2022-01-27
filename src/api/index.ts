import axios from 'axios';
import store from '../store';
import { OW_API, OW_API_KEY, TELEPORT_API } from '../helpers/variables';

const clientOw = (() => {
  const instance = axios.create({
    baseURL: OW_API,
  });
  return instance;
})();

const clientTeleport = (() => {
  const instance = axios.create({
    baseURL: TELEPORT_API,
  });
  return instance;
})();

export const api = {
  // OpenWeather
  async getForecast(lat: string, lon: string) {
    try {
      const { data } = await clientOw.get('onecall', {
        params: {
          lat,
          lon,
          exclude: 'minutely,alerts',
          appid: OW_API_KEY,
        },
      });

      store.dispatch('changeForecast', data);
      store.dispatch('changeTimezoneOffset', data.timezone_offset);
    } catch (error) {
      console.error(error);
    }
  },
  // Teleport
  async getCityToLocation({ lat, lon }: { lat: number; lon: number }): Promise<CurrentLocation | void> {
    try {
      const {
        data: { _embedded },
      } = await clientTeleport.get(`locations/${lat},${lon}/`);

      const name = _embedded['location:nearest-cities'][0]['_links']['location:nearest-city'].name;

      const newLocation = {
        name,
        lat: lat.toString(),
        lon: lon.toString(),
      };

      return newLocation;
    } catch (error) {
      console.error(error);
    }
  },
  async getCityToName({ name }: { name: string }) {
    try {
      const {
        data: { _embedded },
      } = await clientTeleport.get('cities/', {
        params: {
          search: name,
          limit: 5,
        },
      });
      const searchResults = _embedded['city:search-results'];

      return searchResults;
    } catch (error) {
      console.error(error);
    }
  },
  async getCityToLink({ url }: { url: string }): Promise<CurrentLocation | void> {
    try {
      const { data } = await axios.get(url);

      const newLocation = {
        name: data.name,
        lat: data.location.latlon.latitude.toString(),
        lon: data.location.latlon.longitude.toString(),
      };

      return newLocation;
    } catch (error) {
      console.error(error);
    }
  },
};
