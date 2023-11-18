import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

import './App.css';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );
}

export default App;
