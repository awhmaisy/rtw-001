'use client';

import { useState } from 'react';

export default function Items() {
  const [items] = useState([
    {
      name: 'TACTICAL SIGHT',
    },
    {
      name: "'MY OTHER RIDE' PLATE COVER",
    },
    {
      name: 'DECORATIVE MUZZLE GUARD',
    },
    {
      name: 'ENGRAVED BANANA CLIP', 
    },
    {
      name: 'CARABINER AND KEYCHAIN SET', 
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
