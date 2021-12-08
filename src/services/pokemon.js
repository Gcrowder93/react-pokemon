export async function getPokemon(query) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data;
}

//searching by pokemon property
//by saying pokemon=char, finds all that has char
//the ('pokemon') is name, or pokemon in the end of url
//query is the text you are searching for, like char
//if you change pokemon into egg-group-1, and query into monster, it shows the data of "egg group 1", and returns matching monster.
