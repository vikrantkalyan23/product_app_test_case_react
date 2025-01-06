import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

test('renders component correctly', () => {
  render(<CourseList />);
  expect(screen.getByText(/some text/i)).toBeInTheDocument();
});
