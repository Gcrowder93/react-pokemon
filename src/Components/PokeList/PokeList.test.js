import { render } from '@testing-library/react';
import PokeList from './PokeList';

test('renders the pokemon name', () => {
  const Charmander = {
    pokemon: 'Charmander',
    type_1: 'Fire',
    type_2: 'NA',
    _id: 1,
  };
  const container = render(<PokeList pokemon={[Charmander]} />);
  expect(container).toMatchSnapshot();
});
