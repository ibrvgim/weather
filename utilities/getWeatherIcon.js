export function getWeatherIcon(description) {
  let icon;

  if (description?.toLowerCase() === 'sunny') icon = '☀️';
  else if (description?.toLowerCase() === 'clear') icon = '⛅';
  else if (description?.toLowerCase() === 'clouds') icon = '☁️';
  else if (description?.toLowerCase() === 'rain') icon = '🌧️';
  else if (description?.toLowerCase() === 'snow') icon = '🌨️';
  else icon = '🌥️';

  return icon;
}
