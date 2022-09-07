import React from 'react'

export default function Highlight({children}) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(241, 244, 247)',
        borderColor: '#242e38',
        borderRadius: '0.5rem',
        // color: '#ffc555',
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
