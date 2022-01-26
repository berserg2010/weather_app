declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

type CurrentLocation = {
  name: string;
  lat: string;
  lon: string;
};

type Forecast = {
  dt: Date;
  temp: string | { max: string; min: string };
  pressure: string;
  humidity: number;
  wind_speed: string;
  wind_deg: number;
  weather_description: string;
  weather_icon: string;
};

type Settings = {
  temperature: TEMP_SETTINGS;
  windSpeed: WIND_SPEED_SETTINGS;
  pressure: PRESSURE_SETTINGS;
};
