import React from 'react';
import { Button } from '@mui/material';
export default function PokeList({ pokemon, currentPage, setCurrentPage, setLoading }) {
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
                Type-1:{p.type_1.charAt(0).toUpperCase() + p.type_1.slice(1)} Type-2:
                {p.type_2.charAt(0).toUpperCase() + p.type_2.slice(1)}
                <p key={p.id}>
                  HP:{p.hp} ATT:{p.attack} DEF:{p.defense}
                  <div>
                    <br></br>
                  </div>{' '}
                  {/* Spec. Att: {p.special_attack} Spec. Def: {p.special_defence} */}
                  {/* <div>
                    <br></br>
                  </div>{' '}
                  Speed {p.speed} */}
                  <p key={p.id}>#{p.species_id}</p>
                </p>
              </p>
            </p>
          </>
        ))}

        <div className="pagenumber">Page: {currentPage}</div>
        <Button
          style={{
            backgroundColor: 'pink',
          }}
          variant="contained"
          className="button2"
          onClick={handleNextPage}
        >
          Next Page
        </Button>
      </div>
    );
  }
}
