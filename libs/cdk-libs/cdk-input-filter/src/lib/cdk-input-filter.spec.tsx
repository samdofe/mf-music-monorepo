import {render} from '@testing-library/react';

import CdkInputFilter from './cdk-input-filter';

describe('CdkInputFilter', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkInputFilter />);
    expect(baseElement).toBeTruthy();
  });
});
