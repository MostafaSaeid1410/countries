import { useState } from 'react';
import Dropbox from './Dropbox';

export default function Form({ onAddItems }) {
  const [selected, setSelected] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(selected);
    const newCountry = { country: selected, id: Date.now() };

    onAddItems(newCountry);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>Add to the list of countries you want to visit</h3>

      <Dropbox selected={selected} onSelect={setSelected} />
      <button>Add</button>
    </form>
  );
}
