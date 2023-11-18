import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

import './App.css';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
