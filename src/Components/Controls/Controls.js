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
  handleNextPage,
  // allTypes,
  // setType,
  // filterPokemon,
}) {
  return (
    <div className="searchbar">
      <TextField
        className="textbar"
        type="text"
        varient="outlined"
        label="Search"
        // placeholder=" Search For Pokemon.."
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
      {/* <option value="Choose">Choose By Type</option>
        <option value="Bug">Bug</option>
        <option value="Fairy">Fairy</option>
        <option value="Ghost">Ghost</option>
        <option value="Normal">Normal</option>
        <option value="Steel">Steel</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Grass">Grass</option>
        <option value="Poison">Poison</option>
        <option value="Water">Water</option>
        <option value="Dragon">Dragon</option>
        <option value="Fire">Fire</option>
        <option value="Ground">Ground</option>
        <option value="Psychic">Psychic</option>
        <option value="Electric">Electric</option>
        <option value="Flying">Flying</option>
        <option value="Ice">Ice</option>
        <option value="Rock">Rock</option>
      </select> */}

      <div>
        <br></br>
      </div>
      <Button
        style={{
          backgroundColor: 'tomato',
        }}
        variant="contained"
        className="button"
        onClick={() => setLoading(true)}
      >
        Search
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
