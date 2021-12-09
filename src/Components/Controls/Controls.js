import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  // type_1,
  // type_2,
  // setType,
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
      <select
        className="dropdowntype"
        // value={(type_1, type_2)}
        // onChange={(e) => setType(e.target.value)}
      >
        <option value="type_1">Type 1</option>
        <option value="type_2">Type 2</option>
      </select>

      <div>
        <br></br>
      </div>
      <button className="button" onClick={() => setLoading(true)}>
        Search!
      </button>
    </div>
  );
}
