import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greeting', () => {
  render(<Greet />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent(/hi guest/i);
});

// test('Greeting with prop', () => {
//   render(<Greet name='sky'/>);
//   const divElement = screen.getByRole("contentinfo");
//   expect(divElement).toHaveTextContent(/Hi sky/);
// });