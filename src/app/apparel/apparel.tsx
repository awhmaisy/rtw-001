'use client';

import { useState } from 'react';

export default function Apparel() {
  const [items] = useState([
    {
      name: 'LETHALITY CALCULATIONS',
    },
    {
      name: 'GOOD TIL IT FUCKIN\' AIN\'T',
    },
    {
      name: 'IN MEMORY OF WHEN I GAVE A FUCK',
    },
    {
      name: 'PRIVATIZED INTELLIGENCE',
    },
    {
      name: 'BE VIGILANT, BE RETICENT, BE RELENTLESS',
    },
    {
      name: ' LEGACY MANUFACTURING',
    },
    {
      name: 'SITREP',
    },
    {
      name: 'TARGET PACKAGE',
    },
    {
      name: 'DIVINE RETRIBUTION',
    }
  ]);

  return (
    <div>
      <div>
        <p style={{textDecoration: 'underline'}}>GARMENTS</p>
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

