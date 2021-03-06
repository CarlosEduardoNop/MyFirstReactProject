import React from 'react';
import api from './services/api';
import Routes from "./routers";

import './styles.css';

import Header from './Components/Header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
