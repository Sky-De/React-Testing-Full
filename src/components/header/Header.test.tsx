import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header all tests", ()=> {
  it.skip('renders learn react link', () => {
  render(<Header />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toBeInTheDocument();
});

it.skip('content', () => {
  render(<Header />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Header");
});
})