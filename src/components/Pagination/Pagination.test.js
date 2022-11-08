import { render, screen } from '@testing-library/react';
import Pagination from '.';

describe('Pagination component', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Pagination onPageChange={() => {}} totalCount={300} currentPage={1} pageSize={20} />
        );
        expect(container).toBeInTheDocument();
    });
    it('renders left and right arrows when totalCount is 300 ', () => {
        render(<Pagination onPageChange={() => {}} totalCount={300} currentPage={1} pageSize={20} />);
        expect(screen.getByTestId('arrow-left')).toBeInTheDocument();
        expect(screen.getByTestId('arrow-right')).toBeInTheDocument();
    });
});
