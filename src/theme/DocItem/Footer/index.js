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
          <div className={clsx(styles.infoBoxCol, 'col')}>
            <h3>About this doc</h3>
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
          <div className={clsx(styles.infoBoxCol, 'col')}>
            <h3>Contribute</h3>
            <Link to={editUrl} className={styles.infoBoxLink}>
              {editUrl && <EditThisPage editUrl={editUrl} />}
            </Link>
            <Link to={'/community/stay-up-to-date'} className={styles.infoBoxLink}>
              Stay up to date
            </Link>
          </div>
          <div className={clsx(styles.infoBoxCol, 'col')}>
            <h3>Need help?</h3>
            <Link to={'https://discord.gg/radworks'} className={styles.infoBoxLink}>
              Find us on Discord
            </Link>
            <Link to={'https://twitter.com/radworks_'} className={styles.infoBoxLink}>
              Follow us on Twitter
            </Link>
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
