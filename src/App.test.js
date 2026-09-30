import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the navbar and the About Me page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Jordan Triplett' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
});
