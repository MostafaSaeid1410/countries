import React, { useState } from 'react';
const predefinedCountries = [
  { id: 1, country: 'Egypt' },
  { id: 2, country: 'Portugal' },
  { id: 3, country: 'Brazil' },
  { id: 4, country: 'Japan' },
  { id: 5, country: 'Germany' },
  { id: 6, country: 'France' },
  { id: 7, country: 'Argentine' },
  { id: 8, country: 'America' },
  { id: 9, country: 'Russia' },
];

function Dropbox({ onSelect, selected }) {
  // const [country, setCountry] = useState('');

  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      placeholder='select the country'
    >
      {predefinedCountries.map((country) => (
        <option value={country.country} key={country.id}>
          {country.country}
        </option>
      ))}
    </select>
  );
}

export default Dropbox;
