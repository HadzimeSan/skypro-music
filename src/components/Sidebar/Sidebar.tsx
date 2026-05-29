import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const playlists = [
  { src: '/img/playlist01.png', alt: 'Плейлист дня' },
  { src: '/img/playlist02.png', alt: '100 танцевальных хитов' },
  { src: '/img/playlist03.png', alt: 'Инди заряд' },
];

export default function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <svg width={43} height={43}>
            <use href="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          {playlists.map((playlist) => (
            <div key={playlist.src} className={styles.sidebar__item}>
              <Link href="/" className={styles.sidebar__link}>
                <Image
                  className={styles.sidebar__img}
                  src={playlist.src}
                  alt={playlist.alt}
                  width={250}
                  height={150}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
