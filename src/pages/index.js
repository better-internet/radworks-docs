import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Index() {
  return (
    <Layout title="Radicle Documentation" description="Hello React Page">
      <header className={styles.header}>
        <h1 className={styles.hero}>
          Radicle Documentation
        </h1>
        <p className={styles.subhead}>User documentation, onboarding guides, frequently asked questions, and governance for the future of sovereign code infrastructure.</p>
      </header>
      <main className={styles.section}>
        <div className={styles.grid}>
            <a href="/get-started" className={styles.item}>
              <h2>Users</h2>
              <p>Learn how to securely collaborate on software over a peer-to-peer network built on Git.</p>
              <span className={styles.button}>
                Go &rarr;
              </span>
            </a>
            <a href="/community" className={styles.item}>
              <h2>Community</h2>
              <p>This is where some text goes about what readers will find in the community &amp; governance hub.</p>
              <span className={styles.button}>
                Go &rarr;
              </span>
            </a>
            <a href="/governance" className={styles.item}>
              <h2>Governance</h2>
              <p>This is where some text goes about what readers will find in the community &amp; governance hub.</p>
              <span className={styles.button}>
                Go &rarr;
              </span>
            </a>
        </div>
      </main>
    </Layout>
  );
}
