import { render, screen } from '@testing-library/react';
import Greet from '../components/greet/Greet';

test('Greeting from __testing__ folder', () => {
  render(<Greet />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toBeInTheDocument();
});