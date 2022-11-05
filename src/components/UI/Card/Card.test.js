import { render } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
    it('renders without crashing', () => {
        const { container } = render(<Card />);
        expect(container).toBeInTheDocument();
    });
});
