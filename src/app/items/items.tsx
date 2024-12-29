'use client';

import { useState } from 'react';

export default function Items() {
  const [items] = useState([
    {
      name: 'TACTICAL SIGHT',
    },
    {
      name: 'DECORATIVE MUZZLE GUARD',
    },
    {
      name: 'ENGRAVED CLIP', 
    },
    {
      name: 'CARABINER and KEYCHAIN SET', 
    }
  ]);

  return (
    <div>
      <div>
        <p style={{textDecoration: 'underline'}}>OBJECTS</p>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
