import styles from '../styles/ConditionCard.module.css';

function ConditionCard({ title, result }) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <p>{result}</p>
    </div>
  );
}

export default ConditionCard;
