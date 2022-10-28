import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiBoxProps {}

const StyledUiBox = styled.div`
  color: pink;
`;

export function UiBox(props: UiBoxProps) {
  return (
    <StyledUiBox>
      <h1>Welcome to UiBox!</h1>
    </StyledUiBox>
  );
}

export default UiBox;
