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
        {/* <FormControl className="app__dropdown">
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
        </FormControl> */}
      </div>
      <div className="select">
        <div className="InputSelect">
          <label htmlFor='accountNumber'>Account Number</label>
          <input onFocus={handleInputFocus} onBlur={handleInputFocusOut} maxLength='10' type="text" placeholder="Select or Enter Account Number" value={toAccountNumber} list='accountNumber' onChange={(e) => setToAccountNumber(e.target.value)} />
          <svg style={{ transform: dropdownVisible ? 'rotate(180deg)' : '' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8L10 14L4 8" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div className='beneficiary_dropdown' style={{ display: dropdownVisible ? 'block' : '' }}>
            {
              data.map(data => (
                <div className="item" onClick={() => handleItem(data)}>
                  <div className="name">{data.name}</div>
                  <div className='bank-details'>
                    {data.bank}: {data.accountNumber}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
