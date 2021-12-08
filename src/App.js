import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
// import { getType } from './Components/Type/Type';
import PokeList from './Components/PokeList/PokeList';
// import TypeList from './Components/TypeList/TypeList';
import Controls from './Components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [type_1, setType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      // const typedata = await getType(query);
      // setType(typedata.results);
      setPokemon(data.results);
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeList pokemon={pokemon} />
          {/* <PokeList pokemon={type_1} /> */}
          {/* <PokeList pokemon={type_2} /> */}
        </>
      )}
      {/* <select className="select" value={pokemon} onChange={(p) => setPokemon(e.target.value)}>
    <option value="Choose">Choose</option>
    <option value="Africa">Africa</option>
    <option value="Asia">Asia</option>
  </select> */}
    </div>
  );
}

export default App;
