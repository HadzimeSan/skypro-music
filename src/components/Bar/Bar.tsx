import Player from '@/components/Player/Player';
import Volume from '@/components/Volume/Volume';
import styles from './Bar.module.css';

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__playerProgress} />
        <div className={styles.bar__playerBlock}>
          <Player />
          <Volume />
        </div>
      </div>
    </div>
  );
}
