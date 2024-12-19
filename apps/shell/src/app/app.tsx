import React, { Suspense } from 'react';
import { CdkHeader } from "@inditex/cdk";
import { ThreeDotsScaleIcon } from '@inditex/icons';

/*const PodcastApp = React.lazy(() => import('podcast/PodcastApp'));
const HomeApp = React.lazy(() => import('home/HomeApp'));*/

export default function App() {
  return (
    <div>
      <CdkHeader title="Podcaster" showIcon={true} />
      <Suspense fallback={<div>Loading Podcast...</div>}>
        <ThreeDotsScaleIcon />
{/*        <HomeApp />
        <PodcastApp />*/}
      </Suspense>
    </div>
  );
}
