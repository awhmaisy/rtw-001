'use client';

import { useState } from 'react';
import Image from 'next/image';

// Add the Item interface
interface Item {
  name: string;
  description: string;
  image: string;
  maxWidth: string;
}

export default function Apparel() {
  const [items] = useState([
    {
      name: 'CIVILIAN',
      description: 'Lethality calculations. Caution in the vicinity.',
      image: '/LETH.png',
      maxWidth: '400px'
    },
    // {
    //   name: 'GOOD TIL IT FUCKIN\' AIN\'T',
    //   description: 'XXX',
    //   image: '/path/to/image2.jpg',
    //   maxWidth: '250px'
    // },
    {
      name: 'I AM ONLY AS GOOD AS MY FATHER MAKES ME',
      description: 'I implore you to reconsider your faith.',
      image: '/I am only as good as my Father makes me..png',
      maxWidth: '400px'
    },
    {
      name: 'AS ABOVE SO BELOW',
      description: 'Many such cases.',
      image: '/AASB.png',
      maxWidth: '500px'
    },
    {
      name: 'GENESIS',
      description: 'And God may find that we must be placed unto the Earth once again.',
      image: '/GENESIS319.jpg',
      maxWidth: '400px'
    },
    // {
    //   name: ' LEGACY BLOUSON OR BOMBER',
    //   description: 'XXX',
    //   image: '/path/to/image5.jpg',
    //   maxWidth: '200px'
    // },
    // {
    //   name: 'SITREP',
    //   description: 'XXX',
    //   image: '/path/to/image6.jpg',
    //   maxWidth: '250px'
    // },
    {
      name: 'TARGET PACKAGE',
      description: 'We will not be taking further questions at this time.',
      image: '/JTCB.jpg',
      maxWidth: '400px'
    },
    {
      name: 'DIVINE RETRIBUTION',
      description: 'Pierce delicacy to find occult devotion.',
      image: '/INV-GENESIS319.jpg',
      maxWidth: '400px'
    }
  ]);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="flex">
      <div className="w-1/3">
        <p style={{ textDecoration: 'underline' }}>GARMENTS</p>
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
            <Image 
              src={selectedItem.image}
              alt={selectedItem.name}
              width={500}
              height={500}
              style={{ maxWidth: selectedItem.maxWidth }}
            />
          </div>
        )}
      </div>
    </div>
  );
}