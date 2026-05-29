import Bar from '@/components/Bar/Bar';
import CenterBlock from '@/components/CenterBlock/CenterBlock';
import Main from '@/components/Main/Main';
import Nav from '@/components/Nav/Nav';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <Main player={<Bar />}>
      <Nav />
      <CenterBlock />
      <Sidebar />
    </Main>
  );
}
