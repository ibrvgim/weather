import styles from '../styles/WeatherDetails.module.css';
import Loading from './Loading';
import ConditionList from './ConditionList';

function WeatherDetails({ weather, loading, input }) {
  const details = weather?.conditions;

  const conditions = {
    temperature: details?.temp,
    tempMax: details?.temp_max,
    tempMin: details?.temp_min,
    feelsLike: details?.feels_like,
    seaLevel: details?.sea_level,
    groundLevel: details?.grnd_level,
    humidity: details?.humidity,
    pressure: details?.pressure,
    wind: weather?.wind,
  };

  let content = <ConditionList conditions={conditions} />;

  if (loading)
    content = (
      <div className={styles.loader}>
        <Loading />
      </div>
    );

  if (!input || input.length < 3)
    content = (
      <div className={styles.emptyPage}>
        <p>Always ready to show the weather in your city!</p>
        <img src='/weather.svg' alt='weather icon' draggable={false} />
      </div>
    );

  return (
    <div className={styles.container}>
      <p>More Details</p>
      {content}
    </div>
  );
}

export default WeatherDetails;
