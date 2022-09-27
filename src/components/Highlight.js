import React from 'react'

export default function Highlight ({ children }) {
  return (
    <div
      style={{
        border: '1px solid rgba(85, 85, 255, 0.7)',
        borderRadius: '0.5rem',
        marginBottom: '20px',
        padding: '2rem 2rem',
        fontSize: '20px',
        '& p': {
          margin: '0 0 0',
        }
      }}>
      {children}
    </div>
  );
}
