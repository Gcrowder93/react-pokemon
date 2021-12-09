import React from 'react';

export default function PokeList({
  pokemon,
  currentPage,
  setCurrentPage,
  setLoading,
  // handleNextPage,
}) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  {
    return (
      <div className="grid">
        {pokemon.map((p) => (
          <>
            <p className="pokename" key={p.id}>
              {p.pokemon.charAt(0).toUpperCase() + p.pokemon.slice(1)}

              <img src={p.url_image}></img>
              <p key={p.id}>
                Type 1-{p.type_1} Type 2-{p.type_2}
                <p key={p.id}>
                  {/* {p.hp} {p.attack} {p.defence} {p.special_attack} {p.special_defence} {p.speed} */}
                  <p key={p.id}>#{p.species_id}</p>
                </p>
              </p>
            </p>
          </>
        ))}
        <div>
          {' '}
          Page: {currentPage} <br></br>
        </div>
        {/* <button onClick={() => setCurrentPage}>Next Page</button> */}
        <button className="button2" onClick={() => setCurrentPage((prevState) => ++prevState)}>
          Next Page
        </button>
      </div>
    );
  }
}
