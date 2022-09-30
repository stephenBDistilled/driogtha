import { useCountryPage } from '../useCountryPage/useCountryPage';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Pass as prop?
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 4px;
  height: 200px;
  width: 200px;
  border: 1px solid grey;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: paleturquoise;
  }
`;

function CountryCard({ code }: { code: string }) {
  const { fetchCountryData } = useCountryPage();
  const [countryData, setCountryData] = useState<any>();

  async function init(code: string) {
    try {
      const res = await fetchCountryData(code);
      setCountryData(res);
    } catch (_error) {}
  }

  useEffect(() => {
    init(code);

    return () => {};
  }, [code]);

  return (
    <Link href={`/countries/${code}`}>
      <Container>
        <img src={countryData?.coatOfArms?.png} height={100} width={100} />
        <p>{countryData?.name?.common ?? '?'}</p>
      </Container>
    </Link>
  );
}

export { CountryCard };
