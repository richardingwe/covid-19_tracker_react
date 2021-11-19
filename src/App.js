import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import './App.scss';

function App() {
  const [toAccountNumber, setToAccountNumber] = useState('');
  const [dropdownVisible, setDropdownVisble] = useState(false);

  const data = [
    {
      name: 'Maria Ingwe',
      bank: 'First Bank',
      accountNumber: 1234567890,
    },
    {
      name: 'John Doe',
      bank: 'GT Bank',
      accountNumber: 2222222222,
    },
    {
      name: 'Isong King',
      bank: 'Access Bank',
      accountNumber: 3333333333,
    },
    {
      name: 'Miriam Stone',
      bank: 'Stanbic IBTC Bank',
      accountNumber: 4345454343,
    },
    {
      name: 'Angella Bone',
      bank: 'Kuda Bank',
      accountNumber: 9584373892,
    },
    {
      name: 'Lizzy Williams',
      bank: 'Diamond Bank',
      accountNumber: 2984637899
    },
  ];

  const [bankDetails, setBankDetails] = useState(data);


  const handleInputChange = (e) => {
    let num = e.target.value;
    if (num === '') return setToAccountNumber(num);
    if (isNaN(num[num.length - 1])) return;
    setToAccountNumber(num);

    let filteredData = data.filter(data => data.accountNumber.toString().includes(num));
    setBankDetails(filteredData);
  };

  const handleItem = (data) => {
    console.log('clicked');
    setToAccountNumber(data.accountNumber);
  };

  const handleInputFocus = (e) => {
    setDropdownVisble(prevState => !prevState);
  };

  const handleInputFocusOut = (e) => {
    setTimeout(() => setDropdownVisble(prevState => !prevState), 200);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
          // value={country}
          // onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>

          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
