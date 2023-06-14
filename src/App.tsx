import React from 'react';
import { StartPage } from './pages/StartPage';
import { Home } from './pages/Home';
import styles from './App.module.scss'
import { MidldlePage } from './pages/MiddlePage';

function App() {
  return (
    <div className={styles.wrapper}>
      <MidldlePage/>
    </div>
  );
}

export default App;
