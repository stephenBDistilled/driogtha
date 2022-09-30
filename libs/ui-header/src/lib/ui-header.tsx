import styled from 'styled-components';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface UiHeaderProps {
  domain: string;
}

const StyledUiHeader = styled.div`
  background-color: grey;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 8px;
`;

export function UiHeader(props: UiHeaderProps) {
  return (
    <StyledUiHeader>
      <Link href="/">{props.domain}</Link>
    </StyledUiHeader>
  );
}

export default UiHeader;
