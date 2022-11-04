import { render } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  it('Card', () => {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });
});
