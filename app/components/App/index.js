import React from 'react';
import styles from './main.scss';
import { Header, Main, Footer } from '../index';

const App = () => (
  <div className={styles.main}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
