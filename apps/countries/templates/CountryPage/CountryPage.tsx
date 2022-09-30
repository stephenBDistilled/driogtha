import * as Styles from './styles';
import { useCountryPage } from './useCountryPage/useCountryPage';
import { useState, useEffect } from 'react';

import { CountryCard } from './organisms/CountryCard';

function CountryPage({ countryData }: { countryData: any }) {
  const { fetchCountryData } = useCountryPage();
  const [countries, setCountries] = useState<any[]>();

  async function init() {
    try {
      const res = await fetchCountryData(countryData[0].borders);
      setCountries(res);
    } catch (_error) {}
  }

  useEffect(() => {
    init();

    return () => {};
  }, [countryData]);

  return (
    <Styles.Container>
      <button onClick={() => history.back()}>Back</button>
      <p>{countryData[0].name.common}</p>
      <p>Capital: {countryData[0].capital}</p>
      <p>Neighbouring countries: </p>
      <img src={countryData[0].coatOfArms?.png} height={200} width={200} />
      <Styles.BorderCountries>
        {countries &&
          countries?.map((country) => {
            return (
              <CountryCard
                key={country.cca3}
                code={country.cca3}
                name={country.name?.common}
                coatOfArms={country.coatOfArms?.png}
              />
            );
          })}
      </Styles.BorderCountries>
    </Styles.Container>
  );
}

export { CountryPage };
