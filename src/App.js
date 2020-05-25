import React from 'react';
import { Routes, Route } from 'react-router';

import { Orders } from './components/pages/Orders';
import { Menu } from './components/pages/Menu';
import { NewMeal } from './components/pages/NewMeal';
import { Sidebar } from './components/ui/Sidebar';

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-3/5 xl:w-4/5">
        <Routes>
          <Route exact path="/" element={<Orders />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/nuevo-platillo" element={<NewMeal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
