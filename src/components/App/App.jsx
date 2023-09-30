import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import AnimalList from '../AnimalList/AnimalList';
import AnimalCard from '../AnimalCard/AnimalCard';
import Timeline from '../Timeline/Timeline';
import EtymoPage from '../EtymoPage/EtymoPage';
import MentionsLegales from '../Footer/MentionsLegales/MentionsLegales';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import data from '../../data/data';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/animaux" element={<AnimalList data={data} />} />
            <Route path="/animal/:nom" element={<AnimalCard data={data} />} />
            <Route path="/frise-chronologique" element={<Timeline />} />
            <Route path="/liste-etymologique" element={<EtymoPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
