import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Index() {
  return (
    <Layout title="RadicleDAO Documentation" description="User documentation, onboarding guides, frequently asked questions, and governance for the future of sovereign code infrastructure.">
      <header className={styles.header}>
        <h1 className={styles.hero}>
          RadicleDAO{' '}
          <span className={styles.docs}>
            Documentation
          </span>
        </h1>
        <p className={styles.subhead}>User documentation, onboarding guides, frequently asked questions, and governance for the future of sovereign code infrastructure.</p>
      </header>
      <main className={styles.section}>
        <div className={styles.grid}>
            <Link to="/get-started" className={styles.item}>
              <h2>Users</h2>
              <p>Learn how to securely host and collaborate on software over a peer-to-peer network built on Git.</p>
              <span className={styles.button}>
                Go &rarr;
              </span>
            </Link>
            <Link to="/community" className={styles.item}>
              <h2>Community</h2>
              <p>Discover where the Radicle community hangs out and plans for the future of sovereign code infrastructure.</p>
              <span className={styles.button}>
                Go &rarr;
              </span>
            </Link>
            <Link to="/governance" className={styles.item}>
              <h2>Governance</h2>
              <p>Participate in the decentralized community driving project development and our essential transition to the DAO.</p>
              <span className={styles.button}>
                Go &rarr;
              </span>
            </Link>
        </div>
      </main>
    </Layout>
  );
}
