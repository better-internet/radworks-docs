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
        <p className={styles.subhead}>Welcome to the documentation for the RadicleDAO ecosystem, which is building sovereign code infrastructure, crowdfunding for the open web, and beyond.</p>
      </header>
      <main className={styles.section}>
        <div className={styles.grid}>
            <Link to="/community" className={styles.item}>
              <h2>Community</h2>
              <p>Discover where our core development teams and contributors hang out and plan product development for Radicle (code collaboration) and Drips (funding).</p>
            </Link>
            <Link to="/governance" className={styles.item}>
              <h2>Governance</h2>
              <p>Participate in the decentralized community driving product development and our essential transition to the DAO.</p>
            </Link>
        </div>
      </main>
    </Layout>
  );
}
