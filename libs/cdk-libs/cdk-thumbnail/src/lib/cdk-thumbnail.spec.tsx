import {render} from '@testing-library/react';

import CdkThumbnail from './cdk-thumbnail';

const cdkThumbnailPropsMock = {
  title: 'CDK CARD Unit test',
  subTitle: 'Unit test',
  imgUrl: '',
  onThumbnailClick: ()=> {}
}

describe('CdkThumbnail', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkThumbnail {...cdkThumbnailPropsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
