export async function getPokemon(query, order) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'pokemon');
  params.set('direction', order);
  params.set('page', 'currentPage');
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
    //add &perPage=20 once pages are set up
  );
  const data = await resp.json();
  return data;
}

//searching by pokemon property
//by saying pokemon=char, finds all that has char
//the ('pokemon') is name, or pokemon in the end of url
//query is the text you are searching for, like char
//if you change pokemon into egg-group-1, and query into monster, it shows the data of "egg group 1", and returns matching monster.
