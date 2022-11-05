import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingContent from './index';

describe('LoadingContent', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Router>
                <LoadingContent />
            </Router>
        );
        expect(container).toBeInTheDocument();
    });

    it('renders error message', () => {
        const message = 'Opps something went wrong';
        const errorObj = { response: { data: { message } } };
        render(
            <Router>
                <LoadingContent response={null} error={errorObj} loading={false} />
            </Router>
        );
        expect(screen.getByText(message)).toBeInTheDocument();
    });

    it('renders Loading ...', () => {
        render(
            <Router>
                <LoadingContent response={null} error={null} loading={true} />
            </Router>
        );
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders content', () => {
        render(
            <Router>
                <LoadingContent response={true} error={null} loading={false}>
                    <span data-testid="response content"></span>
                </LoadingContent>
            </Router>
        );
        expect(screen.queryByText('Loading...')).toBeNull();
        expect(screen.queryByRole('error')).toBeNull();
        expect(screen.getByTestId('response content')).toBeInTheDocument();
    });
});
