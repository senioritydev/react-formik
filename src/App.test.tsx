import { render, screen } from '@testing-library/react';
import App from './App';

test('renders User Login header', () => {
  render(<App />);
  const linkElement = screen.getByText(/User Login/i);
  expect(linkElement).toBeInTheDocument();
});
