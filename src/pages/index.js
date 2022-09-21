import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Index() {
  return (
    <Layout title="Radicle Documentation" description="Hello React Page">
      <header className={styles.header}>
        <h1 
          style={{
            fontSize: '5.7vw',
            textAlign: 'center',
            color: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient( 180deg, rgb(255, 85, 255) 0%, rgb(85, 85, 255) 100% )',
          }}>
          Radicle
          <span 
            style={{
              display: 'block',
              letterSpacing: '-0.2vw',
              lineHeight: '1.1',
            }}>Documentation</span>
        </h1>
        <p className={styles.subhead}>Some subhead text should go here.</p>
      </header>
      <main className={styles.section}>
        <div className={styles.grid}>
            <a href="/what-is-radicle" className={styles.itemA}>
              <h2>User Hub</h2>
              <p>This is where some text goes about what readers will find in the user hub.</p>
              <span>
                Go &rarr;
              </span>
            </a>
            <a href="community" className={styles.item}>
              <h2>Community Hub</h2>
              <p>This is where some text goes about what readers will find in the community &amp; governance hub.</p>
              <span>
                Go &rarr;
              </span>
            </a>
        </div>
      </main>
    </Layout>
  );
}
