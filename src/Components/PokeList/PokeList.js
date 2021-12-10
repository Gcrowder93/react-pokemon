import React from 'react';
import { Button } from '@mui/material';
export default function PokeList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  console.log(pokemon);
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  {
    return (
      <div className="container">
        <div className="grid">
          {pokemon.map((p) => (
            <div className="pokename" key={p._id}>
              console.log(p._id)
              {p.pokemon.charAt(0).toUpperCase() + p.pokemon.slice(1)}
              <img src={p.url_image}></img>
              <div>
                Type1:{p.type_1.charAt(0).toUpperCase() + p.type_1.slice(1)} Type2:
                {p.type_2.charAt(0).toUpperCase() + p.type_2.slice(1)}
                HP:{p.hp} ATT:{p.attack} DEF:{p.defense}
                <br></br> {/* Spec. Att: {p.special_attack} Spec. Def: {p.special_defence} */}
                {/* <div>
                    <br></br>
                  </div>{' '}
                  Speed {p.speed} */}
                <p>#{p.species_id}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagenumber">Page: {currentPage}</div>
        <Button
          style={{
            backgroundColor: 'pink',
          }}
          variant="contained"
          className="button2"
          onClick={handleNextPage}
        >
          ◓Next Page◓
        </Button>
      </div>
    );
  }
}
