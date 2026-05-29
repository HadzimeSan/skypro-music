import Filter from '@/components/Filter/Filter';
import Playlist from '@/components/Playlist/Playlist';
import Search from '@/components/Search/Search';
import styles from './CenterBlock.module.css';

export default function CenterBlock() {
  return (
    <div className={styles.centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <Playlist />
      </div>
    </div>
  );
}
