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
      <div>
        {pokemon.map((p) => (
          <>
            <p key={p.id}>
              {p.pokemon}
              <p key={p.id}>
                {p.type_1} {p.type_2}
                <p key={p.id}>
                  {p.hp} {p.attack} {p.defence} {p.special_attack} {p.special_defence} {p.speed}
                  <p key={p.id}>{p.species_id}</p>
                </p>
              </p>
            </p>
          </>
        ))}
        <div> Page: {currentPage}</div>
        {/* <button onClick={() => setCurrentPage}>Next Page</button> */}
        <button onClick={() => setCurrentPage((prevState) => ++prevState)}>Next Page</button>
      </div>
    );
  }
}
