import { ReactElement, ReactNode, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

export interface IRouterWrapperProps {
  element: ReactNode;
  isProtected?: boolean;
  fallback?: string;
}

export const RouteWrapper = ({
  element,
  isProtected = false,
  fallback = "/",
}: IRouterWrapperProps): ReactElement => {
  return isProtected ? (
    <Navigate to={fallback} />
    ) : (
    <Suspense fallback={<div>Route is loading ... </div>}>
      {element}
    </Suspense>
  )
}
