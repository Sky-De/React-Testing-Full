import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders p', () => {
  render(<App />);
  const pEmelemt = screen.getByText(/Edit and save to reload./i);
  expect(pEmelemt).toBeInTheDocument();
});
