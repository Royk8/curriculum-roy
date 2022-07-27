import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'styles/styles.css';
import { MainLayout } from 'layouts/MainLayout';
import { Welcome } from 'pages/Welcome';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Welcome />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
