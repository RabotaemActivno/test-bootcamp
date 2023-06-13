import React from 'react';
import { Home } from './pages/home';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Home/>
    </div>
  );
}

export default App;
