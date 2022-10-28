'use client';

import { Menu } from './Menu';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  @media screen and (min-width: 64em) {
    grid-template-columns: 300 1fr;
    gap: 1.5rem /* 24px */;
  }
`;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
}
