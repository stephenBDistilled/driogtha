import Link from 'next/link';

import { axiosInstance } from 'apps/countries/api/axios';

function Country({ code, countryData }: { code: string; countryData: any }) {
  return (
    <>
      <button onClick={() => history.back()}>Back</button>
      <div>{code}</div>
      <div>Capital: {countryData[0].capital}</div>
      <div>
        Neighbouring countries{' '}
        {countryData[0].borders.map((border) => (
          <p>
            <Link href={`/countries/${border}`}>{border}</Link>
          </p>
        ))}
      </div>
    </>
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
  return { props: { code, countryData } };
}

export default Country;
