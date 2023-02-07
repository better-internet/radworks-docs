import React from 'react'
import Grid, { Button } from '@site/src/components/Grid'
import styles from './Installation.module.css'

export default function Installation () {
  return (
    <Grid>
      <Button
        style={{
          gridColumn: '1 / span 12'
        }}
        href="https://radicle.xyz/get-started.html"
        title="Install Radicle"
        cta="radicle.xyz"
      >
        See the Radicle website for the most up-to-date CLI tooling installation instructions for macOS and Linux and the process for creating your Radicle identity.
      </Button>
    </Grid>
  );
}
