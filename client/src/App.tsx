import React from 'react';
import { Header, Footer } from './components/layouts';
import Routes from './routes/Routes';
import { Wrapper } from './styles/GlobalStyles';

export const App = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Wrapper id='outer-container'>
        <div id='page-wrap'>
          <Header />
          <Routes />
        </div>
        <Footer />
      </Wrapper>
    </React.Suspense>
  );
};
