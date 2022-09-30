import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiFooterProps {}

const StyledUiFooter = styled.div`
  background-color: grey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 8px;
`;

export function UiFooter(props: UiFooterProps) {
  return (
    <StyledUiFooter>
      <h1>@Driogtha 20XX</h1>
    </StyledUiFooter>
  );
}

export default UiFooter;
