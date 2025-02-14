import {render} from '@testing-library/react';
import { Pulse3Icon } from './Pulse3Icon';
import { ThreeDotsScaleIcon } from './ThreeDotsScaleIcon';


describe('Icons', () => {
  it('should render Pulse3Icon successfully', () => {
    const {baseElement} = render(<Pulse3Icon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render ThreeDotsScaleIcon successfully', () => {
    const {baseElement} = render(<ThreeDotsScaleIcon />);
    expect(baseElement).toBeTruthy();
  });
});
