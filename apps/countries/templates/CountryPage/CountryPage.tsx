import * as Styles from './styles';
import { useCountryPage } from './useCountryPage/useCountryPage';

import { CountryCard } from './organisms/CountryCard';

function CountryPage({ countryData }: { countryData: any }) {
  const { data, isLoading } = useCountryPage(countryData[0].borders.join(','));

  return (
    <div>
      <button onClick={() => history.back()}>Back</button>
      <Styles.CountryData>
        <img src={countryData[0].coatOfArms?.png} height={200} width={200} />
        <h1>{countryData[0].name.common}</h1>
        <img src={countryData[0].flags?.png} height={50} />
        <ul>
          <li>Capital: {countryData[0].capital}</li>
          <li>Population: {countryData[0].population}</li>
          <li>Region: {countryData[0].region}</li>
        </ul>
      </Styles.CountryData>
      <Styles.SectionHeader>Neighbouring countries: </Styles.SectionHeader>
      <Styles.BorderCountries>
        {data &&
          !isLoading &&
          data.map((country) => {
            return (
              <CountryCard
                key={country.cca3}
                name={country.name?.common}
                coatOfArms={country.coatOfArms?.png}
              />
            );
          })}
        {isLoading && 'Loading...'}
      </Styles.BorderCountries>
    </div>
  );
}

export { CountryPage };
