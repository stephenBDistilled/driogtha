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

function CountryCard({
  code,
  name,
  coatOfArms,
}: {
  code: string;
  name: string;
  coatOfArms: string;
}) {
  return (
    <Link href={`/countries/${code}`}>
      <Container>
        <img src={coatOfArms} height={100} width={100} />
        <p>{name}</p>
      </Container>
    </Link>
  );
}

export { CountryCard };
