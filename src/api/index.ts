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
};
