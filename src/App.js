import React from 'react';
import './App.css';

import ScanCard from './scan/scan-card';
import Displaycard from './display/display-card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Displaycard />
      </header>
    </div>
  );
}

export default App;
