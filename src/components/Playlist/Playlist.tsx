import { tracks } from '@/data/tracks';
import PlaylistTitle from '@/components/PlaylistTitle/PlaylistTitle';
import Track from '@/components/Track/Track';
import styles from './Playlist.module.css';

export default function Playlist() {
  return (
    <>
      <PlaylistTitle />
      <div className={styles.content__playlist}>
        {tracks.map((track) => (
          <Track key={`${track.title}-${track.author}`} track={track} />
        ))}
      </div>
    </>
  );
}
