import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      {/* Changed BrowserRouter to HashRouter because of GitHub Pages */}
      <HashRouter basename='/'>
        <Routes />
      </HashRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
