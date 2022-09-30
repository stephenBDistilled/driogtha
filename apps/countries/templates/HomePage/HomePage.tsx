import Link from 'next/link';

import * as Styles from './styles';

function HomePage({ countries }: { countries: any }) {
  return (
    <Styles.Container>
      <Link href="/search">Search here</Link>
      {countries.map((item, index) => {
        return (
          <p key={index}>
            <Link href={`/countries/${item.name.common}`}>
              {item.name.common}
            </Link>
          </p>
        );
      })}
      <div>
        <Link href="http://localhost:4200/">Or find love</Link>
      </div>
    </Styles.Container>
  );
}

export { HomePage };
