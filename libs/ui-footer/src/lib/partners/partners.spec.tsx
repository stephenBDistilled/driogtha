import { render } from '@testing-library/react';

import Partners from './partners';

describe('Partners', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Partners />);
    expect(baseElement).toBeTruthy();
  });
});
