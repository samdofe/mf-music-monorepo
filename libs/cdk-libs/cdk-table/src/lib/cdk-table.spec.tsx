import {render} from '@testing-library/react';

import CdkTable from './cdk-table';

describe('CdkTable', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkTable />);
    expect(baseElement).toBeTruthy();
  });
});
