const ThunderstormCodeToIcon = new Map([
  [200, 'CloudLightning'],
  [201, 'CloudLightning'],
  [202, 'CloudLightning'],
  [210, 'CloudLightning'],
  [211, 'CloudLightning'],
  [212, 'CloudLightning'],
  [221, 'CloudLightning'],
  [230, 'CloudLightning'],
  [231, 'CloudLightning'],
  [232, 'CloudLightning'],
]);

const DrizzleCodeToIcon = new Map([
  [300, ''],
  [301, ''],
  [302, ''],
  [310, ''],
  [311, ''],
  [312, ''],
  [313, ''],
  [314, ''],
  [321, ''],
]);

const RainCodeToIcon = new Map([
  [500, 'LightRain'],
  [501, 'LightRain'],
  [502, 'HeavyRain'],
  [503, 'HeavyRain'],
  [504, 'HeavyRain'],
  [511, 'HeavyRain'],
  [520, 'HeavyRain'],
  [521, 'HeavyRain'],
  [522, 'HeavyRain'],
  [531, 'HeavyRain'],
]);

const SnowCodeToIcon = new Map([
  [600, 'LightSnow'],
  [601, 'Snow'],
  [602, 'SnowStorm'],
  [611, 'Sleet'],
  [612, 'Sleet'],
  [613, 'Sleet'],
  [615, 'Sleet'],
  [616, 'Sleet'],
  [620, 'LightSnow'],
  [621, 'Snow'],
  [622, 'SnowStorm'],
]);

const AtmosphereCodeToIcon = new Map([
  [701, ''],
  [711, ''],
  [721, ''],
  [731, ''],
  [741, ''],
  [751, ''],
  [761, ''],
  [762, ''],
  [771, ''],
  [781, ''],
]);

const ClearCodeToIcon = new Map([[800, 'Sun']]);

const CloudsCodeToIcon = new Map([
  [801, 'PartlyCloudyDay'],
  [802, 'PartlyCloudyDay'],
  [803, 'Cloud'],
  [804, 'Clouds'],
]);

export const WeatherCodeToIcon = new Map([
  ...ThunderstormCodeToIcon,
  ...DrizzleCodeToIcon,
  ...RainCodeToIcon,
  ...SnowCodeToIcon,
  ...AtmosphereCodeToIcon,
  ...ClearCodeToIcon,
  ...CloudsCodeToIcon,
]);
