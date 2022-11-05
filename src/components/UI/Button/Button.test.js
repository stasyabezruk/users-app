import { fireEvent, render, screen } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
    it('renders without crashing', () => {
        const { container } = render(<Button />);
        expect(container).toBeInTheDocument();
    });

    it('button onClick handler', () => {
        const handleClick = jest.fn();
        render(<Button handleClick={handleClick} />);
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
