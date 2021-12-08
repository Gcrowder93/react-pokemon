import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <>
          <p key={p.id}>
            {p.pokemon}
            <p key={p.id}>{p.species_id}</p>
            <p key={p.id}>
              {p.type_1} {p.type_2}
              <p key={p.id}>
                {p.hp} {p.attack} {p.defence} {p.special_attack} {p.special_defence} {p.speed}
              </p>
            </p>
          </p>
        </>
      ))}
    </div>
  );
}
