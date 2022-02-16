import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

const App = () => (
  <main className="font">
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </HashRouter>
  </main>
);

export default App;
