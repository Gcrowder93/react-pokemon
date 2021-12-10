import React from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  selectedType,
  setSelectedType,
  types,
}) {
  return (
    <div className="searchbar">
      <TextField
        className="textbar"
        type="text"
        varient="outlined"
        // label="◓Search Pokemon◓"
        placeholder=" Search For Pokemon.."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div>
        <br></br>
      </div>
      <Select className="dropdown" value={order} onChange={(e) => setOrder(e.target.value)}>
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
      <div>
        <br></br>
      </div>
      <Select
        value={selectedType}
        className="dropdowntype"
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <MenuItem value="all">Types</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <br></br>
      <Button
        style={{
          backgroundColor: 'tomato',
        }}
        variant="contained"
        className="button"
        onClick={() => setLoading(true)}
      >
        ◓Search◓
      </Button>
      <br></br>

      {/* <Button
        style={{
          backgroundColor: 'pink', 
          //THIS IS A NEXT PAGE BUTTON FOR TOP OF PAGE,
          //DOESNT REGISTER WITH CLICKS
        }}
        variant="contained"
        className="button2"
        onClick={handleNextPage}
      >
        Next Page
      </Button> */}
    </div>
  );
}
