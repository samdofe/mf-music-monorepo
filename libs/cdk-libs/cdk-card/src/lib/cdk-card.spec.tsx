import {render} from '@testing-library/react';

import CdkCard from './cdk-card';

const cdkCardPropsMock = {
  title: 'CDK CARD Unit test',
  subTitle: 'Unit test',
  imageUrl: '',
  description: '',
  onClickHandler: ()=> {}
}

describe('CdkCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkCard {...cdkCardPropsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
