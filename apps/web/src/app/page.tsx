import { HeaderPage } from '@/components/Header';
import { getSession } from '@/lib/session';
import ProfilePage from './dashboard/orginazer/profile/page';
import StaticPage from './dashboard/orginazer/stats/page';

export default async function Home() {
  const session = await getSession();
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full bg-white h-screen">
      <HeaderPage />
      <div className="text-3xl">HELLO</div>
      <h1 className="text-3xl">{session?.username}</h1>
    </div>
  );
}
