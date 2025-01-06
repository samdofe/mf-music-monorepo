import { ReactElement, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteWrapperProps } from './router.model';
import styles from './router.module.scss';

export const RouteWrapper = ({
  element,
  isProtected = false,
  fallback = "/",
}: IRouteWrapperProps): ReactElement => {
  return isProtected ? (
    <Navigate to={fallback} />
    ) : (
    <Suspense fallback={<div className={styles['suspense-loading']}>LOADING ROUTE...</div>}>
      {element}
    </Suspense>
  )
}
