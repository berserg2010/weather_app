import * as process from 'process';

export const OW_API_KEY = process.env.OW_API_KEY;
export const OW_API = 'https://api.openweathermap.org/data/2.5/';
export const TELEPORT_API = 'https://api.teleport.org/api/';

export const DEFAULT_CURRENT_LOCATION = {
  name: 'Atlanta,US',
  lat: '33.748997',
  lon: '-84.387985',
};

export enum TEMP_SETTINGS {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit',
}

export enum WIND_SPEED_SETTINGS {
  MS = 'ms',
  MPH = 'mph',
}

export enum PRESSURE_SETTINGS {
  HPA = 'hpa',
  MMHG = 'mmhg',
}

export const DEFAULT_SETTINGS = {
  temperature: TEMP_SETTINGS.CELSIUS,
  windSpeed: WIND_SPEED_SETTINGS.MS,
  pressure: PRESSURE_SETTINGS.HPA,
};
