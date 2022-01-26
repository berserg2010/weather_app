import store from '../store';
import {
  DEFAULT_CURRENT_LOCATION,
  DEFAULT_SETTINGS,
  PRESSURE_SETTINGS,
  TEMP_SETTINGS,
  WIND_SPEED_SETTINGS,
} from './variables';
import { WeatherCodeToIcon } from './weatherConditionCodes';
import { DateTime } from 'luxon';

const getGeoLocationError = (err: GeolocationPositionError) => console.error(err);

const initCurrentLocationToLocalstorage = (currentLocation: CurrentLocation) => {
  localStorage.setItem('locationName', currentLocation.name);
  localStorage.setItem('locationLat', currentLocation.lat);
  localStorage.setItem('locationLon', currentLocation.lon);
};

export const setCurrentLocationToStorage = (currentLocation?: CurrentLocation | undefined) => {
  const localStorageIsUndefined = typeof localStorage.locationName === 'undefined';
  const isDefaultParametersInLocalStorage = localStorage.locationName == DEFAULT_CURRENT_LOCATION.name;

  if (typeof currentLocation === 'undefined') {
    if (!localStorageIsUndefined && !isDefaultParametersInLocalStorage) {
      const initCurrentLocation: CurrentLocation = {
        name: localStorage.locationName,
        lat: localStorage.locationLat || '',
        lon: localStorage.locationLon || '',
      };
      store.dispatch('changeCurrentLocation', initCurrentLocation);
    } else {
      initCurrentLocationToLocalstorage(DEFAULT_CURRENT_LOCATION);
    }
  } else {
    initCurrentLocationToLocalstorage(currentLocation);
    store.dispatch('changeCurrentLocation', currentLocation);
  }
};

export const checkSettings = (valueOne: Settings, valuerTwo: Settings) => {
  return (
    valueOne.temperature == valuerTwo.temperature &&
    valueOne.windSpeed == valuerTwo.windSpeed &&
    valueOne.pressure == valuerTwo.pressure
  );
};

const initSettingsToLocalstorage = (settings: Settings) => {
  localStorage.setItem('temperature', settings.temperature);
  localStorage.setItem('windSpeed', settings.windSpeed);
  localStorage.setItem('pressure', settings.pressure);
};

export const setSettingsToStorage = (settings?: Settings | undefined): void => {
  const localStorageIsUndefined =
    typeof localStorage.temperature === 'undefined' ||
    typeof localStorage.windSpeed === 'undefined' ||
    typeof localStorage.pressure === 'undefined';

  const isDefaultParametersInLocalStorage =
    localStorage.temperature === DEFAULT_SETTINGS.temperature &&
    localStorage.windSpeed === DEFAULT_SETTINGS.windSpeed &&
    localStorage.pressure === DEFAULT_SETTINGS.pressure;

  if (typeof settings === 'undefined') {
    if (!localStorageIsUndefined && !isDefaultParametersInLocalStorage) {
      const initSettings = {
        temperature: localStorage.temperature,
        windSpeed: localStorage.windSpeed,
        pressure: localStorage.pressure,
      };
      store.dispatch('changeSettings', initSettings);
    } else {
      initSettingsToLocalstorage(DEFAULT_SETTINGS);
    }
  } else {
    initSettingsToLocalstorage(settings);
    store.dispatch('changeSettings', settings);
  }
};

export const getGeoLocation = (success: (data: GeolocationPosition) => {}) => {
  const geoLocationOptions = {
    maximumAge: 0,
    timeout: 5000,
    enableHighAccuracy: false,
  };
  navigator.geolocation.getCurrentPosition(success, getGeoLocationError, geoLocationOptions);
};

export const firstSymbolToUpper = (desc: string): string => {
  return desc
    .split(' ')
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(' ');
};

const convertKToC = (value: number) => {
  const temp = Math.floor(value - 273.15);
  return `${temp > 0 ? '+' : ''}${temp}°С`;
};

const convertKToF = (value: number) => {
  const temp = Math.floor((value * 9) / 5 - 459.67);
  return `${temp > 0 ? '+' : ''}${temp}°F`;
};

const convertTemperature = (temp: number) => {
  // @ts-ignore
  const settingsTemperature = store.state.settings.settings!.temperature;
  return settingsTemperature === TEMP_SETTINGS.CELSIUS ? convertKToC(temp) : convertKToF(temp);
};

const checkTempField = (temp: number | { max: number; min: number }): string | { max: string; min: string } => {
  if (typeof temp === 'object' && !Array.isArray(temp) && temp !== null) {
    return {
      max: convertTemperature(temp.max),
      min: convertTemperature(temp.min),
    };
  }
  if (typeof temp === 'number') {
    return convertTemperature(temp);
  }
  return '';
};

const convertWindSpeed = (speed: number) => {
  // @ts-ignore
  const settingsWindSpeed = store.state.settings.settings.windSpeed;
  return settingsWindSpeed === WIND_SPEED_SETTINGS.MS
    ? `${speed.toFixed(1)}m/s`
    : `${(speed * 2.236936).toFixed(1)}mph`;
};

const convertPressure = (pressure: number) => {
  // @ts-ignore
  const settingsPressure = store.state.settings.settings.pressure;
  return settingsPressure === PRESSURE_SETTINGS.HPA
    ? `${Math.floor(pressure)}hPa`
    : `${Math.floor(pressure * 0.75006)}mmhg`;
};

export const forecastAdapter = (rowForecast: any): Forecast => {
  const forecast = {
    dt: new Date(rowForecast.dt * 1000),
    temp: checkTempField(rowForecast.temp),
    pressure: convertPressure(rowForecast.pressure),
    humidity: rowForecast.humidity,
    wind_speed: convertWindSpeed(rowForecast.wind_speed),
    wind_deg: rowForecast.wind_deg,
    weather_description: firstSymbolToUpper(rowForecast.weather[0].description),
    weather_icon: WeatherCodeToIcon.get(rowForecast.weather[0].id) || '',
  };
  return forecast;
};

const getDate = (dt: Date) => {
  // @ts-ignore
  const offset = store.state.settings.timezoneOffset;
  return DateTime.fromJSDate(dt).toUTC(offset / 60);
};

export const getTime = (dt: Date) => {
  const dtOffset = getDate(dt);

  return dtOffset.toLocaleString(DateTime.TIME_24_SIMPLE);
};
export const getMonthDay = (dt: Date) => {
  const dtOffset = getDate(dt);
  return firstSymbolToUpper(dtOffset.toLocaleString({ month: 'short', day: '2-digit' }));
};
export const getYear = (dt: Date) => {
  const dtOffset = getDate(dt);
  return dtOffset.toLocaleString({ year: 'numeric' });
};
export const getWeekday = (dt: Date) => {
  const dtOffset = getDate(dt);
  return firstSymbolToUpper(dtOffset.toLocaleString({ weekday: 'long' }));
};
