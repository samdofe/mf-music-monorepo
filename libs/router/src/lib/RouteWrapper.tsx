import { ReactElement, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteWrapperProps } from './router.model';

export const RouteWrapper = ({
  element,
  isProtected = false,
  fallback = "/",
}: IRouteWrapperProps): ReactElement => {
  return isProtected ? (
    <Navigate to={fallback} />
    ) : (
    <Suspense fallback={<div>Route is loading ... </div>}>
      {element}
    </Suspense>
  )
}
