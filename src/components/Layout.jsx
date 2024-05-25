import styles from '../styles/Layout.module.css';
import { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import WeatherDetails from './WeatherDetails';
import { fetchWeather, getCityPosition } from '../data/weather';

function Layout() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // it's not a good idea to fetch data by using useEffect hook,
  // but to keep things simple I did like this, otherwise,
  // I would use TanSTack library to handle data fetching

  useEffect(() => {
    setLoading(true);
    async function getWeather() {
      if (!input || input.length < 3) return;
      const [city] = await getCityPosition(input.toLowerCase());
      if (!city) return;
      const { lat, lon } = city;

      const weather = await fetchWeather(lat, lon);
      setWeather(weather);
      setLoading(false);
    }

    getWeather();
  }, [input]);

  const details = {
    conditions: weather?.main,
    city: weather?.name,
    weather: weather?.weather,
    wind: weather?.wind,
  };

  return (
    <main className={styles.container}>
      <SideMenu
        setInput={setInput}
        weather={details}
        loading={loading}
        input={input}
      />
      <WeatherDetails weather={details} loading={loading} input={input} />
    </main>
  );
}

export default Layout;
