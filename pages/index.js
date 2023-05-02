import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
        <a href="/doughnut-1">Doughnut 1 chart example</a>
      </p>
      <p>
        <a href="/doughnut-2">Doughnut 2 chart example</a>
      </p>
    </div>
  );
}
