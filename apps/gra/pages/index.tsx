import Link from 'next/link';

export function Index() {
  return (
    <>
      <Link href="/search">Search here</Link>
      <div>
        <Link href="http://localhost:4201/">Find someplace new</Link>
      </div>
    </>
  );
}

export default Index;
