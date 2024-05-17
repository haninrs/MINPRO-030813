import { HeaderPage } from '@/components/Header';
import { getSession } from '@/lib/session';

export default async function Home() {
  const session = await getSession();
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-screen">
      <HeaderPage />
      <div className="text-3xl">HELLO</div>
      <h1 className="text-3xl">{session?.username}</h1>
    </div>
  );
}
