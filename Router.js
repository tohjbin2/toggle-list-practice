import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
