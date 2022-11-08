import { renderHook } from '@testing-library/react';
import { usePagination } from './usePagination';

describe('UsePagination hook', () => {
    describe('Test when the currentPage is 1 and amount of pages is less than the page numbers', () => {
        test(`returns [1] when totalCount items is 5`, () => {
            const mockProps = {
                totalCount: 5,
                pageSize: 20,
                siblingCount: undefined,
                currentPage: 1,
            };

            const { result } = renderHook(() => usePagination(mockProps));

            expect(result.current).toIncludeAllMembers([1]);
        });

        test(`returns [1, 2] when totalCount items is 25`, () => {
            const mockProps = {
                totalCount: 25,
                pageSize: 20,
                siblingCount: undefined,
                currentPage: 1,
            };

            const { result } = renderHook(() => usePagination(mockProps));
            expect(result.current).toIncludeSameMembers([1, 2]);
        });
    });

    describe('Test when amount of pages is more than the page numbers', () => {
        test(`returns [1, 2, 3, 4, 5, '...', 15] when totalCount = 300 and currentPage - 3`, () => {
            const mock = {
                totalCount: 300,
                pageSize: 20,
                siblingCount: undefined,
                currentPage: 3,
            };

            const { result } = renderHook(() => usePagination(mock));
            expect(result.current).toIncludeSameMembers([1, 2, 3, 4, 5, '...', 15]);
        });

        test(`returns [1, '...', 6, 7, 8, '...', 15] when totalCount = 300 and currentPage - 7`, () => {
            const mock = {
                totalCount: 300,
                pageSize: 20,
                siblingCount: undefined,
                currentPage: 7,
            };

            const { result } = renderHook(() => usePagination(mock));
            expect(result.current).toIncludeSameMembers([1, '...', 6, 7, 8, '...', 15]);
        });

        test(`returns [1, '...', 11, 12, 13, 14, 15] when totalCount = 300 and currentPage - 14`, () => {
            const mock = {
                totalCount: 300,
                pageSize: 20,
                siblingCount: undefined,
                currentPage: 14,
            };

            const { result } = renderHook(() => usePagination(mock));
            expect(result.current).toIncludeSameMembers([1, '...', 11, 12, 13, 14, 15]);
        });
    });
});
