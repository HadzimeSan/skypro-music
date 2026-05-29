import { ReactNode } from 'react';
import styles from './Main.module.css';

type MainProps = {
  children: ReactNode;
  player: ReactNode;
};

export default function Main({ children, player }: MainProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        {player}
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
