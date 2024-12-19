import React, { Suspense } from 'react';
const PodcastApp = React.lazy(() => import('podcast/PodcastApp'));
const HomeApp = React.lazy(() => import('home/HomeApp'));

export function App() {
  return (
    <div>
      <h1>SHELL Host App</h1>
      <Suspense fallback={<div>Loading Podcast...</div>}>
        <HomeApp />
        <PodcastApp />
      </Suspense>
    </div>
  );
}

export default App;
