import React, { Suspense } from 'react';
import { CdkHeader } from "@inditex/cdk";

/*const PodcastApp = React.lazy(() => import('podcast/PodcastApp'));
const HomeApp = React.lazy(() => import('home/HomeApp'));*/

export function App() {
  return (
    <div>
      <CdkHeader title="Podcaster" />
      <Suspense fallback={<div>Loading Podcast...</div>}>
{/*        <HomeApp />
        <PodcastApp />*/}
      </Suspense>
    </div>
  );
}

export default App;
