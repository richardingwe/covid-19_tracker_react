import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import './App.scss';

function App() {
  const [toAccountNumber, setToAccountNumber] = useState('');
  const [dropdownVisible, setDropdownVisble] = useState(false);

  const handleItem = (e) => {
    console.log('clicked');
    setToAccountNumber('1234567890');
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
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
            <div className="item" onClick={handleItem}>
              <div className="name">Maria Ingwe</div>
              <div className='bank-details'>
                First Bank: 1234567890
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
