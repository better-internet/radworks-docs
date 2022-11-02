import React from 'react'
import styles from './Collapse.module.css';

export default function Collapse ({title, date, children}) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}><span className={styles.summaryBold}>{title}</span> {date}</summary>
      <div className={styles.children}>
        {children}
      </div>
    </details>
  );
}
