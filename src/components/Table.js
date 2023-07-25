import { useState } from 'react';
import Dropbox from './Dropbox';

export default function Table({ countries, onEditCountry, onDeleteCountry }) {
  //

  const [openDropboxId, setOpenDropboxId] = useState(null);
  const [selected, setSelected] = useState('select the country...');

  //

  const handleEditCountry = (country) => {
    setOpenDropboxId(country.id === openDropboxId ? null : country.id);
  };
  const checkEditCountry = (country, selected) => {
    console.log(selected);
    onEditCountry(country.id, selected);
    setOpenDropboxId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Country</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {countries.map((country, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                {openDropboxId === country.id ? (
                  <>
                    <Dropbox selected={selected} onSelect={setSelected} />
                    <button
                      onClick={() => {
                        checkEditCountry(country, selected);
                      }}
                    >
                      <ion-icon name='checkmark-outline'></ion-icon>
                    </button>
                  </>
                ) : (
                  country.country
                )}
              </td>
              <td>
                <button onClick={() => handleEditCountry(country)}>
                  <ion-icon name='create-outline'></ion-icon>
                </button>
                <button onClick={() => onDeleteCountry(country.id)}>
                  <ion-icon name='trash-outline'></ion-icon>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
