import {ReactElement, Suspense} from 'react';
import {RouterProvider} from 'react-router-dom';

export interface RouterProviderWrapperProps {
  router: any;
}

export const RouterProviderWrapper = ({router}: RouterProviderWrapperProps): ReactElement => {
  return (
    <Suspense fallback={<div>My route is loading ... </div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
