import cn from 'classnames';
import Link from 'next/link';
import styles from './Player.module.css';

export default function Player() {
  return (
    <div className={styles.bar__player}>
      <div className={styles.player__controls}>
        <div className={styles.player__btnPrev}>
          <svg className={styles.player__btnPrevSvg}>
            <use href="/img/icon/sprite.svg#icon-prev" />
          </svg>
        </div>
        <div className={cn(styles.player__btnPlay, 'btn')}>
          <svg className={styles.player__btnPlaySvg}>
            <use href="/img/icon/sprite.svg#icon-play" />
          </svg>
        </div>
        <div className={styles.player__btnNext}>
          <svg className={styles.player__btnNextSvg}>
            <use href="/img/icon/sprite.svg#icon-next" />
          </svg>
        </div>
        <div className={cn(styles.player__btnRepeat, 'btnIcon')}>
          <svg className={styles.player__btnRepeatSvg}>
            <use href="/img/icon/sprite.svg#icon-repeat" />
          </svg>
        </div>
        <div className={cn(styles.player__btnShuffle, 'btnIcon')}>
          <svg className={styles.player__btnShuffleSvg}>
            <use href="/img/icon/sprite.svg#icon-shuffle" />
          </svg>
        </div>
      </div>

      <div className={styles.player__trackPlay}>
        <div className={styles.trackPlay__contain}>
          <div className={styles.trackPlay__image}>
            <svg className={styles.trackPlay__svg}>
              <use href="/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className={styles.trackPlay__author}>
            <Link href="/" className={styles.trackPlay__authorLink}>
              Ты та...
            </Link>
          </div>
          <div className={styles.trackPlay__album}>
            <Link href="/" className={styles.trackPlay__albumLink}>
              Баста
            </Link>
          </div>
        </div>

        <div className={styles.trackPlay__dislikeWrap}>
          <div className={cn(styles.trackPlay__like, 'btnIcon')}>
            <svg className={styles.trackPlay__likeSvg}>
              <use href="/img/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div className={cn(styles.trackPlay__dislike, 'btnIcon')}>
            <svg className={styles.trackPlay__dislikeSvg}>
              <use href="/img/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
