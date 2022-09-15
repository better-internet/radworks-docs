import React from 'react'

export default function Highlight({children}) {
  return (
    <div
      style={{
        backgroundColor: '#ebecf8',
        borderRadius: '0.75rem',
        marginBottom: '20px',
        padding: '2rem 2rem calc(2rem - 20px)',
        fontSize: '20px',
        '& p': {
          margin: '0 0 0',
        }
      }}>
      {children}
    </div>
  );
}
