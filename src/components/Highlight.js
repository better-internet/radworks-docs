import React from 'react'
import Grid from '@site/src/components/Grid'
import styles from './Highlight.module.css';

export default function Highlight ({ children }) {
  return (
    <Grid>
      <div
        className={styles.highlight}
        style={{
          marginBottom: '20px',
          padding: '2rem 2rem',
          fontSize: '20px',
        }}>
        {children}
      </div>
    </Grid>
  );
}
