import React from 'react'
import Link from '@docusaurus/Link';
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
    <Link to={href} className={styles.button} style={style}>
      {title && <h3>{title}</h3>}
      {children && <p>{children}</p>}
      {cta && <p className={styles.cta}>{cta} &rarr;</p>}
    </Link>
  );
}
