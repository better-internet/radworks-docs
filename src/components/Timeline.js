import React from 'react'
import styles from './Timeline.module.css';
import ReactMarkdown from 'react-markdown'

export default function Timeline ({ date, title, desc }) {
  return (
    <div className={styles.timeline}>
      <time>{date}</time>
      <h3>
        <ReactMarkdown children={title} />
      </h3>
      <p>
        <ReactMarkdown children={desc} />
      </p>
    </div>
  );
}
