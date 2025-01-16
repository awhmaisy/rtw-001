'use client';

import { useState } from 'react';

export default function Sof() {
  const [items] = useState([
    {
      name: 'LOGOMARK TEE',
      description: 'Limited-edition and special-supply tees. 222 units released on XXXX for your enjoyment and aspiration.',
      image: '/JADC2-BLK.jpg',
      maxWidth: '500px'
    },
    {
        name: 'STAFF:COMMEMORATIVE TEE',
        description: 'Limited-edition and special-supply tees. 222 units released on XXXX for your enjoyment and aspiration.',
        image: '/T-STAFF.jpg',
        maxWidth: '400px'
    },
    {
      name: 'LAPTOP ADORNMENT',
      description: 'Because how could we fully love you without a sticker?',
      image: '/meep.png',
      maxWidth: '400px'
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex">
      <div className="w-1/3">
        <p style={{ textDecoration: 'underline' }}>SOF RTW 001-215</p>
        <p style={{ fontStyle: 'italic' }}>IN COLLABORATION WITH PURITY SNIPER</p>
        <br />
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => setSelectedItem(item)}>
              <span style={{ fontStyle: selectedItem === item ? 'italic' : 'normal' }}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 text-left pl-64">
        {selectedItem && (
          <div className="flex flex-col items-start">
            <p>{selectedItem.description}</p>
            <img src={selectedItem.image} alt={selectedItem.name} style={{ maxWidth: selectedItem.maxWidth }} />
          </div>
        )}
      </div>
    </div>
  );
}