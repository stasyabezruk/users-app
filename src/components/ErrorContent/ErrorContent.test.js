import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorContent from './index';

describe('ErrorContent', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Router>
                <ErrorContent />
            </Router>
        );
        expect(container).toBeInTheDocument();
    });
});
