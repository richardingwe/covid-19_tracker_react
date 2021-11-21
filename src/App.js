import { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  const [country, setInputCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);


  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
          setMapCountries(data);
        });
    };

    getCountriesData();
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value={country}
          // onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
