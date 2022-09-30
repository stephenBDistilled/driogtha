import { HomePage } from 'apps/countries/templates/HomePage/HomePage';

interface ServerSideProps {
  data: any;
}

export function Index({ data }: ServerSideProps) {
  return <HomePage />;
}

export async function getServerSideProps() {
  return { props: { data: {} } };
}

export default Index;
