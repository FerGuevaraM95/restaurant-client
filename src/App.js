import React from 'react';
import { Routes, Route } from 'react-router';

import { Orders } from './components/pages/Orders';
import { Menu } from './components/pages/Menu';
import { NewMeal } from './components/pages/NewMeal';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nuevo-platillo" element={<NewMeal />} />
      </Routes>
    </div>
  );
}

export default App;
