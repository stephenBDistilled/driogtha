import { render } from '@testing-library/react';

import UiBox from './ui-box';

describe('UiBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiBox />);
    expect(baseElement).toBeTruthy();
  });
});
