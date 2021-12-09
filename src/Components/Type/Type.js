export async function getType(query) {
  const params = new URLSearchParams();
  params.set('types', query);
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types?${params.toString()}`
  );
  const data = await resp.json();
  return data;
}
