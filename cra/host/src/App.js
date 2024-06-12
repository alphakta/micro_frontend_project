import React from 'react';

const SharedComponentHeader = React.lazy(() => import('shared_component/Header'));
const SharedComponentFooter = React.lazy(() => import('shared_component/Footer'));
const SharedComponentTitle = React.lazy(() => import('shared_component/Title'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <SharedComponentHeader />
    </React.Suspense>
    <React.Suspense fallback="Loading Title">
      <SharedComponentTitle text="Basic Host-Remote" />
    </React.Suspense>
    <React.Suspense fallback="Loading Footer">
      <SharedComponentFooter />
    </React.Suspense>
  </div>
);

export default App;
