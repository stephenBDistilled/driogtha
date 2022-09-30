import { HomePage } from 'apps/countries/templates/HomePage/HomePage';

interface ServerSideProps {}

export function Index({}: ServerSideProps) {
  return <HomePage />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default Index;
