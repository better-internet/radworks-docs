import React from 'react'
import styles from './Grid.module.css';

export default function Grid ({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}

export function Button ({ children, style = {}, href, title, cta }) {
  return (
    <a href={href} className={styles.button} style={style}>
      <h3>{title}</h3>
      <p>{children}</p>
      {cta &&
        <p className={styles.cta}>{cta} &rarr;</p>
      }
    </a>
  );
}
