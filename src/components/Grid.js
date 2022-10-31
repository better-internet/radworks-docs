import React from 'react'
import styles from './Grid.module.css';

export default function Grid ({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}

export function Button ({ children, href, title, cta }) {
  return (
    <a href={href} className={styles.button}>
      <h3>{title}</h3>
      <p>{children}</p>
      <p className={styles.cta}>{cta}</p>
    </a>
  );
}
