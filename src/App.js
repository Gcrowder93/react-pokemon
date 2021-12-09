import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './Components/PokeList/PokeList';
import Controls from './Components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [allTypes, setType] = useState('');
  const [types, filterTypes] = useState('');
  const filterPokemon = pokemon.filter(
    (types) => pokemon.includes(query) && (types.allTypes === allTypes || allTypes === 'Choose')
  );
  const fetchData = async () => {
    const data = await getPokemon(query, order, currentPage, types);
    setPokemon(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  if (loading) {
    fetchData();
  }
  loading, query, order, currentPage, types;

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
        setType={setType}
        filterTypes={filterTypes}
        filterPokemon={filterPokemon}
      />

      {loading && <span className="loader"></span>}
      <div>
        <br></br>
      </div>
      {!loading && (
        <PokeList
          pokemon={pokemon}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={loading}
          setLoading={setLoading}
          types={types}
          allTypes={allTypes}
        />
      )}
    </div>
  );
}

export default App;
