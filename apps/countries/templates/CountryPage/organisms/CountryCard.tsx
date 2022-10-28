import Link from 'next/link'; // Pass as prop?
import styled from 'styled-components';

import { UiBox } from '@driogtha/ui-box';

const Container = styled(UiBox)`
  cursor: pointer;
  text-align: center;
  margin: 4px;

  &:hover {
    background-color: paleturquoise;
  }
`;

function CountryCard({
  name,
  coatOfArms,
}: {
  name: string;
  coatOfArms: string;
}) {
  return (
    <Link href={`/countries/${name}`}>
      <Container>
        <img src={coatOfArms} height={100} width={100} />
        <p>{name}</p>
      </Container>
    </Link>
  );
}

export { CountryCard };
