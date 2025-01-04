import {render} from '@testing-library/react';

import CdkHeader from './cdk-header';

const renderElement = (title:string, show=false)=> render(<CdkHeader title={title} showIcon={show} />)

describe('CdkHeader', () => {
  it('should render successfully', () => {
    const {baseElement} = renderElement('test-title');
    expect(baseElement).toBeTruthy();
  });

  it('should match mock title prop', ()=>{
    const mockTitle = 'test-title';
    const { getByText } = renderElement(mockTitle);
    expect(getByText(`${mockTitle}`)).toBeTruthy();
  })

  it('should show icon', ()=>{
    const mockTitle = 'test-title';
    const { findByTestId } = renderElement(mockTitle, true);
    expect(findByTestId('pulse3Icon-testid')).toBeTruthy();
  })
});
