export type TrackItem = {
  title: string;
  titleSpan?: string;
  author: string;
  album: string;
  time: string;
  withTitleText?: boolean;
};

export const tracks: TrackItem[] = [
  {
    title: 'Guilt',
    author: 'Nero',
    album: 'Welcome Reality',
    time: '4:44',
    withTitleText: true,
  },
  {
    title: 'Elektro',
    author: 'Dynoro, Outwork, Mr. Gee',
    album: 'Elektro',
    time: '2:22',
    withTitleText: true,
  },
  {
    title: "I'm Fire",
    author: 'Ali Bakgor',
    album: "I'm Fire",
    time: '2:22',
    withTitleText: true,
  },
  {
    title: 'Non Stop',
    titleSpan: '(Remix)',
    author: 'Стоункат, Psychopath',
    album: 'Non Stop',
    time: '4:12',
    withTitleText: true,
  },
  {
    title: 'Run Run',
    titleSpan: '(feat. AR/CO)',
    author: 'Jaded, Will Clarke, AR/CO',
    album: 'Run Run',
    time: '2:54',
  },
];
