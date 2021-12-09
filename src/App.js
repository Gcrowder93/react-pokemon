import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from './services/pokemon';
import PokeList from './Components/PokeList/PokeList';
import Controls from './Components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, currentPage, selectedType);
      setPokemon(data.results);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
        types={types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
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
        />
      )}
    </div>
  );
}

export default App;
