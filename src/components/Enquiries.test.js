import { render, screen } from '@testing-library/react';
import Enquiries from './Enquiries';

test('renders component correctly', () => {
  render(<Enquiries />);
  expect(screen.getByText(/some text/i)).toBeInTheDocument();
});
