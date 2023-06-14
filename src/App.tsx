import React from 'react';
import { StartPage } from './pages/StartPage';
import { Home } from './pages/home';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <StartPage/>
    </div>
  );
}

export default App;
