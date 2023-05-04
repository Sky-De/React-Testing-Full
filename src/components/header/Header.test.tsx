import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header all tests", ()=> {
  it('renders learn react link', () => {
  render(<Header />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toBeInTheDocument();
});

it('content', () => {
  render(<Header />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Header");
});
})