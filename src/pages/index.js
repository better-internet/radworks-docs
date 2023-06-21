import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Grid, { Button } from '@site/src/components/Grid'
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
        <Grid>
          <Button
            href="/community"
            title="Wiki"
            cta="Explore Radworks"
          >
            Learn more about what Radworks is all about.
          </Button>
          <Button
            href="https://radicle.community/"
            title="Forum"
            cta="radicle.community"
          >
            Get updates and participate in discussion on the Radworks forum.
          </Button>
        </Grid>
      </main>
    </Layout>
  );
}
