import Link from 'next/link';

interface ServerSideProps {
  data: any;
}

export function Index({ data }: ServerSideProps) {
  return (
    <div>
      <Link href="/search">Search here</Link>
      <div>
        <Link href="http://localhost:4200/">Find love</Link>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: { data: {} } };
}

export default Index;
