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
      name: 'I AM ONLY AS GOOD AS MY FATHER MAKES ME',
    },
    {
      name: 'AS ABOVE SO BELOW',
    },
    {
      name: ' LEGACY BLOUSON OR BOMBER',
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

