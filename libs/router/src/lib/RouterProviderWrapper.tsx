import {ReactElement, Suspense} from 'react';
import {RouterProvider} from 'react-router-dom';
import { IRouterProviderWrapperParams } from './router.model';

export const RouterProviderWrapper = ({router}: IRouterProviderWrapperParams): ReactElement => {
  return (
    <Suspense fallback={<div>My route is loading ... </div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
