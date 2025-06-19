import React from 'react';
 

 interface LinkBoxProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
 }
 

 const LinkBox: React.FC<LinkBoxProps> = ({ imageUrl, title, description, link }) => {
  return (
  <div style={{ border: '1px solid var(--vocs-color_border)', borderRadius: '10px', padding: '16px', display: 'flex', flexWrap: 'wrap',  alignItems: 'center', gap: '16px' }}>
      <img src={imageUrl} alt={title} style={{ width: '80px', height: '80px', borderRadius: '10px' }} />
      <div style={{ flexGrow: 1, minWidth: '200px', textAlign: 'left' }}>
        <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
  <p>{description}</p>
  <a style={{ textDecoration: 'underline' }} href={link}>{link}</a>
  </div>
  </div>
  );
 };
 

 export default LinkBox;
