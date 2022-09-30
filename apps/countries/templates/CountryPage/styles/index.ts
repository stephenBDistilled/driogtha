import styled from 'styled-components';

export const SectionHeader = styled.p`
  padding: 4px;
`;

export const CountryData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BorderCountries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  overflow-x: scroll;

  @media screen and (min-width: 64em) {
    flex-direction: row;
  }
`;
