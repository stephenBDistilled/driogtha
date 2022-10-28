import * as Styles from './styles';
import { useRouter } from 'next/router';
import { useCountryPage } from './useCountryPage/useCountryPage';

import { CountryCard } from './organisms/CountryCard';

function CountryPage({ countryData }: { countryData: any }) {
  const CD = countryData[0].borders
    ? countryData[0].borders.join(',')
    : undefined;
  const { data, isLoading } = useCountryPage(CD);
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
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

      {data || isLoading ? (
        <>
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
        </>
      ) : undefined}
    </div>
  );
}

export { CountryPage };
