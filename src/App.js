import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Table from './components/Table';
import Stats from './components/Stats';

export default function App() {
  const [countries, setCountries] = useState([]);

  function handleAddItems(country) {
    setCountries((countries) => [...countries, country]);
    console.log(countries);
  }

  function handleDeleteCountry(id) {
    setCountries((countries) =>
      countries.filter((country) => country.id !== id)
    );
  }
  function handleEditCountry(id, newCountry) {
    console.log(id);
    console.log(newCountry);
    const newCountries = countries.map((country) => {
      if (country.id === id) {
        return { ...country, country: newCountry };
      }
      return country;
    });
    console.log(newCountries);
    setCountries([...newCountries]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Table
        countries={countries}
        onEditCountry={handleEditCountry}
        onDeleteCountry={handleDeleteCountry}
      />
      <Stats />
    </div>
  );
}
