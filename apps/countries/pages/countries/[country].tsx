import { axiosInstance } from 'apps/countries/api/axios';

import { CountryPage } from 'apps/countries/templates/CountryPage/CountryPage';

function Country({ code, countryData }: { code: string; countryData: any }) {
  return <CountryPage code={code} countryData={countryData} />;
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
  return { props: { code, countryData } };
}

export default Country;
