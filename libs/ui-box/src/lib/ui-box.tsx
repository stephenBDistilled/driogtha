import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiBoxProps {}

const Container = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(51, 51, 51, 0.24);
  padding: 8px;
  font-size: 16px;
  line-height: 24px;

  display: grid;
  grid-gap: 4px;

  @media screen and (min-width: 64em) {
    padding: 16px;
  }
`;

export function UiBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Container className={className}>{children}</Container>;
}

export default UiBox;
