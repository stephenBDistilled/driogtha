import Link from 'next/link';

import * as Styles from './styles';

function HomePage({ countryNames }: { countryNames: any }) {
  return (
    <Styles.Container>
      <Link href="/search">Search here</Link>
      {countryNames.map((item) => {
        return <p key={item.name.common}>{item.name.common}</p>;
      })}
      <div>
        <Link href="http://localhost:4200/">Or find love</Link>
      </div>
    </Styles.Container>
  );
}

export { HomePage };
