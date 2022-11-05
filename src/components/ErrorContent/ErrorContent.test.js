import { render } from '@testing-library/react';
import ErrorContent from './index';

describe('ErrorContent', () => {
    it('renders without crashing', () => {
        const { container } = render(<ErrorContent />);
        expect(container).toBeInTheDocument();
    });
});
