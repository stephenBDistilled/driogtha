import { HomePage } from 'apps/countries/templates/HomePage/HomePage';
import { axiosInstance } from '../api/axios';

interface ServerSideProps {
  data: any;
}

export function Index({ data }: ServerSideProps) {
  return <HomePage countries={data} />;
}

export async function getServerSideProps() {
  const { data } = await axiosInstance.get(
    'https://restcountries.com/v3.1/all'
  );

  return { props: { data } };
}

export default Index;
