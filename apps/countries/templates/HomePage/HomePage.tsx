import Link from 'next/link';

import * as Styles from './styles';

function HomePage() {
  return (
    <Styles.Container>
      <Link href="/search">Search here</Link>
      <div>
        <Link href="http://localhost:4200/">Or find love</Link>
      </div>
    </Styles.Container>
  );
}

export { HomePage };
