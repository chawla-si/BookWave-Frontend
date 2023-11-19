import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

import './App.css';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/Carousel';
import { Heros } from './layouts/Homepage/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros/>
    </div>
  );
}

export default App;
