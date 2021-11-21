import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.scss';

function App() {
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
