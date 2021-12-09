import React from 'react';
import { getPokemon } from '../../services/pokemon';
import { getType } from '../Type/Type';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  types,
  allTypes,
  setType,
  filterPokemon,
}) {
  return (
    <div className="searchbar">
      <input
        className="textbar"
        type="text"
        placeholder=" Search For Pokemon.."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div>
        <br></br>
      </div>
      <select className="dropdown" value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <div></div>
      <div>
        <br></br>
      </div>
      <select className="dropdowntype" value={allTypes} onChange={(e) => setType(e.target.value)}>
        <option value="Choose">Choose By Type</option>
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
      </select>
      <div className="typebox">
        {filterPokemon.map((types) => (
          <pokemon key={types.id} {...types} />
        ))}
      </div>

      <div>
        <br></br>
      </div>
      <button className="button" onClick={() => setLoading(true)}>
        Search!
      </button>
    </div>
  );
}
