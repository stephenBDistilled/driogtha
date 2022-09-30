import Link from 'next/link';
import * as Styles from './styles';

// import {} from '@driogtha/util-formatters';

function CountryPage({
  code,
  countryData,
}: {
  code: string;
  countryData: any;
}) {
  return (
    <Styles.Container>
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
    </Styles.Container>
  );
}

export { CountryPage };
