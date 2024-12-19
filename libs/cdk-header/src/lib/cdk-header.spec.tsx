import {render} from '@testing-library/react';

import CdkHeader from './cdk-header';

describe('CdkHeader', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkHeader />);
    expect(baseElement).toBeTruthy();
  });
});
