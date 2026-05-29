import cn from 'classnames';
import styles from './PlaylistTitle.module.css';

export default function PlaylistTitle() {
  return (
    <div className={styles.content__title}>
      <div className={cn(styles.playlistTitle__col, styles.col01)}>Трек</div>
      <div className={cn(styles.playlistTitle__col, styles.col02)}>
        Исполнитель
      </div>
      <div className={cn(styles.playlistTitle__col, styles.col03)}>Альбом</div>
      <div className={cn(styles.playlistTitle__col, styles.col04)}>
        <svg className={styles.playlistTitle__svg}>
          <use href="/img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  );
}
