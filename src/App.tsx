import React from 'react';
import { StartPage } from './pages/StartPage';
import { Home } from './pages/Home';
import styles from './App.module.scss'
import { MidldlePage } from './pages/MiddlePage';
import { EndPage } from './pages/EndPage';
import { ProgressLine } from './components/ProgressLine';
import { Route, Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';


function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/start'} element={<StartPage />} />
        <Route path={'/middle'} element={<MidldlePage />} />
        <Route path={'/end'} element={<EndPage />} />
      </Routes>
    </div>
  );
}

export default App;
