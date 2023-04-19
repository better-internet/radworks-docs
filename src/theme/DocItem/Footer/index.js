import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import styles from './styles.module.css';

// BEGIN MODIFICATIONS
import Link from '@docusaurus/Link';
// END MODIFICATIONS

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags} =
    metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {/* BEGIN MODIFICATIONS */}
      <div className={styles.infoBox}>
        <div className="row">
          <div className="col">
            <p className={styles.infoBoxHeader}>About this doc</p>
            <p>
              {(lastUpdatedAt || lastUpdatedBy) && (
                <LastUpdated
                  lastUpdatedAt={lastUpdatedAt}
                  formattedLastUpdatedAt={formattedLastUpdatedAt}
                  lastUpdatedBy={lastUpdatedBy}
                />
              )}
            </p>
          </div>
          <div className="col">
            <p className={styles.infoBoxHeader}>Contribute</p>
            <p>{editUrl && <EditThisPage editUrl={editUrl} />}</p>
            <p>
              <span className={styles.infoBoxIcon}>🤝</span> 
              <Link to={'#'}>
                Stay up to date
              </Link>
            </p>
          </div>
          <div className="col">
            <p className={styles.infoBoxHeader}>Need help?</p>
            <p>
              <span className={styles.infoBoxIcon}>💬</span> 
              <Link to={'#'}>
                Find us on Discord
              </Link>
            </p>
            <p>
              <span className={styles.infoBoxIcon}>🧭</span> 
              <Link to={'#'}>
                Another link
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )} */}
      {/* END MODIFICATIONS */}
    </footer>
  );
}
