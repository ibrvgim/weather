import styles from '../styles/Loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loading;
