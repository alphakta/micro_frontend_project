import LocalButton from './Button';
import React from 'react';

const SharedComponentHeader = React.lazy(() => import('shared_component/Header'));
const SharedComponentFooter = React.lazy(() => import('shared_component/Footer'));

const SharedComponentSubtitle = React.lazy(() => import('shared_component/SubTitle'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <SharedComponentHeader />
    </React.Suspense>
    <React.Suspense fallback="Loading Subtitle">
      <SharedComponentSubtitle text="Remote" />
    </React.Suspense>
    <LocalButton />
    <React.Suspense fallback="Loading Footer">
      <SharedComponentFooter />
    </React.Suspense>
  </div>
);

export default App;
