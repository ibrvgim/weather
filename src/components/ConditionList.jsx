import { convertToCelcius } from '../../utilities/convertToCelcius';
import ConditionCard from './ConditionCard';

function ConditionList({ conditions }) {
  return (
    <div>
      <ConditionCard
        title='Wind'
        result={`${Math.round(conditions?.wind?.speed)} km/h`}
      />
      <ConditionCard
        title='Feels like'
        result={`${convertToCelcius(conditions?.feelsLike)} °C`}
      />
      <ConditionCard title='Humidity' result={`${conditions?.humidity} %`} />

      <ConditionCard title='Pressure' result={`${conditions?.pressure} mb`} />
      {conditions?.groundLevel && (
        <ConditionCard
          title='Ground level'
          result={`${conditions.groundLevel} ft`}
        />
      )}

      {conditions?.seaLevel && (
        <ConditionCard title='Sea level' result={`${conditions.seaLevel} ft`} />
      )}

      <ConditionCard
        title='Temperature'
        result={`${convertToCelcius(conditions?.temperature)} °C`}
      />
      <ConditionCard
        title='Maximum Temperaure'
        result={`${convertToCelcius(conditions?.tempMax)} °C`}
      />
      <ConditionCard
        title='Minimum Tempareture'
        result={`${convertToCelcius(conditions?.tempMin)} °C`}
      />
    </div>
  );
}

export default ConditionList;
