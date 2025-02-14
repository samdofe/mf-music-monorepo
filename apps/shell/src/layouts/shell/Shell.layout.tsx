import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import { CdkHeader } from '@sdf-design-system/cdk';
import styles from './shell.layout.module.scss';

export const ShellLayoutComponent = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();

  return (
    <div className={styles['shell']}>
      <div className={styles['shell__layout']}>
        <CdkHeader title="Podcaster" showIcon={navigation.state !== 'idle'} titleClickHandler={()=> navigate('/')}/>
        <Outlet />
      </div>
    </div>
  );
};
