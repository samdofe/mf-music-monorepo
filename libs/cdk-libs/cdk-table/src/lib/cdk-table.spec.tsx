import {render} from '@testing-library/react';

import CdkTable from './cdk-table';

const cdkTAblePropsMock = {
  headers: [],
  headersTemplateStyle: '',
  data:[],
  onRowClickHandler: ()=>{}
};

describe.todo('CdkTable', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CdkTable {...cdkTAblePropsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
