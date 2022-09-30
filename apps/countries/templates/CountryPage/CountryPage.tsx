import * as Styles from './styles';

import { CountryCard } from './organisms/CountryCard';

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
      <div>{countryData[0].name.common}</div>
      <div>Capital: {countryData[0].capital}</div>
      <p>Neighbouring countries: </p>
      <Styles.BorderCountries>
        {countryData[0].borders.map((border, index) => (
          <CountryCard key={index} code={border} />
        ))}
      </Styles.BorderCountries>
    </Styles.Container>
  );
}

export { CountryPage };
