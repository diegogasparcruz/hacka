import React from 'react';
import Routes from './routes';
import MenuPage from './pages/components/MenuPage';
import FooterPage from './pages/components/FooterPage';

function App() {
  return (
    <div className="App">
      <MenuPage />
      <Routes />
      <FooterPage />
    </div>
  );
}

export default App;
