import {render} from '@testing-library/react';

import CdkCard from './cdk-card';

describe('CdkCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkCard />);
    expect(baseElement).toBeTruthy();
  });
});
