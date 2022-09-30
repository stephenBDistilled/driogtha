import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PartnersProps {}

const StyledPartners = styled.div`
  color: pink;
`;

export function Partners(props: PartnersProps) {
  return (
    <StyledPartners>
      <h1>Welcome to Partners!</h1>
    </StyledPartners>
  );
}

export default Partners;
