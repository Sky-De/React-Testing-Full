import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('form', () => {
  render(<Footer />);
  const formElement = screen.getByText("Footer");
  expect(formElement).toBeInTheDocument();
});