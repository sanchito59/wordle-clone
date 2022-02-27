import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Current Word element', () => {
  render(<App />);
  const currentWordElem = screen.getByText(/Current Word/i);
  expect(currentWordElem).toBeInTheDocument();
});
