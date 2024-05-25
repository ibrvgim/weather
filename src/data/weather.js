const API_KEY = '6d505f404b4f0f295490a63509eeaf3c';

export async function getCityPosition(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error('Could not find city.');

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    if (!response.ok)
      throw new Error('Could not find information about the weather.');

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
