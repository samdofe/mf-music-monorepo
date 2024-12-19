import {render} from '@testing-library/react';
import Pulse3Icon from './Pulse3Icon';


describe('Icons', () => {
  it('should render Pulse3Icon successfully', () => {
    const {baseElement} = render(<Pulse3Icon />);
    expect(baseElement).toBeTruthy();
  });
});
