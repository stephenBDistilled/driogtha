'use client';

import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <h1>My Profile</h1>{' '}
      <Suspense fallback="Loading...">
        <div>28102022</div>
      </Suspense>
    </div>
  );
}
