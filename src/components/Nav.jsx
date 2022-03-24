import React from 'react';

import styles from './styles/Nav.module.css';
import btn from './styles/Button.module.css';

function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className="nav-brand">
          <span>logo</span>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className={btn.outline} type="button">Resume</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
