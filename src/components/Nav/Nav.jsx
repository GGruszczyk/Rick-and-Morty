import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="https://via.placeholder.com/50" alt="Logo" />
        <h1>Rick & Morty App</h1>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Nav;
