import Link from 'next/link';

const axios = require('axios').default;

function Country({ code, countryData }: { code: string; countryData: any }) {
  return (
    <>
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
  console.log(code);
  let countryData;

  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    countryData = data;
  } catch (error) {
    console.log(error);
  }
  return { props: { code, countryData } };
}

export default Country;
