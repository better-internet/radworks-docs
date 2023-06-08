import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Index() {
  return (
    <Layout title="Radworks Documentation" description="">
      <header className={styles.header}>
        <h1 className={styles.hero}>
          Radworks{' '}
          <span className={styles.docs}>
            Documentation
          </span>
        </h1>
        <p className={styles.subhead}>Welcome to the documentation for the Radworks ecosystem, which is building sovereign code infrastructure, crowdfunding for the open web, and beyond.</p>
      </header>
      <main className={styles.section}>
        <div className={styles.grid}>
            <Link to="/community" className={styles.item}>
              <h2>Wiki</h2>
              <p>Learn more about what Radworks is all about.</p>
            </Link>
            <Link to="https://radicle.community" className={styles.item}>
              <h2>Forum</h2>
              <p>Get updates and participate in discussion on the Radworks forum.</p>
            </Link>
        </div>
      </main>
    </Layout>
  );
}
