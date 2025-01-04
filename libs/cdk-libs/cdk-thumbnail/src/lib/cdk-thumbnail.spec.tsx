import {render} from '@testing-library/react';

import CdkThumbnail from './cdk-thumbnail';

describe('CdkThumbnail', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkThumbnail />);
    expect(baseElement).toBeTruthy();
  });
});
