import styles from '../styles/SideMenu.module.css';
import { convertToCelcius } from '../../utilities/convertToCelcius';
import { IoMdSearch } from 'react-icons/io';
import Loading from './Loading';
import { getCurrentDateTime } from '../../utilities/currentDate';
import { getWeatherIcon } from '../../utilities/getWeatherIcon';

function SideMenu({ setInput, weather, loading, input }) {
  const tempareture = convertToCelcius(weather?.conditions?.temp);
  const { formattedDate, dayOfWeek, formattedTime } = getCurrentDateTime();

  let content = (
    <>
      <div className={styles.weatherInfromation}>
        <span>{getWeatherIcon(weather?.weather?.[0].main)}</span>

        <p>{tempareture}°C</p>
        <p>{weather?.weather?.[0].main}</p>
      </div>

      <div className={styles.additionalInformation}>
        <p>{formattedDate}</p>
        <p>
          {dayOfWeek} {formattedTime}
        </p>

        <p>{weather?.city}</p>
      </div>
    </>
  );

  if (loading) content = <Loading />;
  if (!input || input.length < 3)
    content = (
      <div className={styles.emptyPage}>
        <p>Just start typing city name ( minimum 3 characters )</p>
        <img src='/search.svg' alt='serach icon' draggable={false} />
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.serachContainer}>
        <input
          type='text'
          placeholder='Search by City'
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <IoMdSearch />
        </button>
      </div>

      {content}
    </div>
  );
}

export default SideMenu;
