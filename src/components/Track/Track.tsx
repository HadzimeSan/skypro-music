import Link from 'next/link';
import { TrackItem } from '@/data/tracks';
import styles from './Track.module.css';

type TrackProps = {
  track: TrackItem;
};

export default function Track({ track }: TrackProps) {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <svg className={styles.track__titleSvg}>
              <use href="/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          {track.withTitleText ? (
            <div className={styles.track__titleText}>
              <Link href="/" className={styles.track__titleLink}>
                {track.title}{' '}
                {track.titleSpan && (
                  <span className={styles.track__titleSpan}>{track.titleSpan}</span>
                )}
              </Link>
            </div>
          ) : (
            <div>
              <Link href="/" className={styles.track__titleLink}>
                {track.title}{' '}
                {track.titleSpan && (
                  <span className={styles.track__titleSpan}>{track.titleSpan}</span>
                )}
              </Link>
            </div>
          )}
        </div>
        <div className={styles.track__author}>
          <Link href="/" className={styles.track__authorLink}>
            {track.author}
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link href="/" className={styles.track__albumLink}>
            {track.album}
          </Link>
        </div>
        <div className={styles.track__time}>
          <svg className={styles.track__timeSvg}>
            <use href="/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.track__timeText}>{track.time}</span>
        </div>
      </div>
    </div>
  );
}
