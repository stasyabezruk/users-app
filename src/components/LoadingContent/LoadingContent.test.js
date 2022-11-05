import { render } from '@testing-library/react';
import LoadingContent from './index';

describe('LoadingContent', () => {
    it('renders without crashing', () => {
        const { container } = render(<LoadingContent />);
        expect(container).toBeInTheDocument();
    });

    it('renders error message', () => {
        const errorMsg = 'Opps something went wrong';
        render(<LoadingContent response={null} error={errorMsg} />);
    });
});
