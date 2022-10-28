import Link from 'next/link';

import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: none;

  @media screen and (min-width: 64em) {
    display: block;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <div>
        <Link href="/dashboard/myprofile">My Profile</Link>
      </div>
      <div>
        <Link href="/dashboard/saves">Saves</Link>
      </div>
      <div>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
    </MenuWrapper>
  );
};

export { Menu };
