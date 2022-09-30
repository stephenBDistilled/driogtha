import { axiosInstance } from 'apps/countries/api/axios';

import { CountryPage } from 'apps/countries/templates/CountryPage/CountryPage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Country({ countryData }: { countryData: any }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CountryPage countryData={countryData} />
    </QueryClientProvider>
  );
}

export async function getServerSideProps(ctx) {
  const code = ctx.params.country;
  let countryData;

  try {
    const { data } = await axiosInstance.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    countryData = data;
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
  return { props: { countryData } };
}

export default Country;
