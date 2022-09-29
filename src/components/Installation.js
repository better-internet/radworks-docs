import React from 'react'
import Grid from '@site/src/components/Grid'
import styles from './Installation.module.css';

export default function Installation () {
  return (
    <Grid>
      <div className={styles.install}>
        <a className={styles.link} href="https://radicle.xyz/get-started.html">
          See the Radicle website for the most up-to-date installation instructions for macOS and Linux, including the process for creating your Radicle identity.
        </a>
      </div>
    </Grid>
  );
}
