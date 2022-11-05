import { useMemo } from 'react';
import { range } from './utils';

export const DOTS = '...';

/**
 * Returns paginationRange - the range of numbers to be displayed in our pagination component as an array
 *
 * @param {number} totalCount Total count of data available from the source.
 * @param {number} pageSize Maximum data that is visible in a single page.
 * @param {number} siblingCount Min number of page buttons to be shown on each side of the current page button.
 * @param {number} currentPage The current active page. We'll use a 1-based index instead of a traditional 0-based index for our currentPage value.
 */

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        /*
          We do not want to show dots if there is only one position left 
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

        //computation logic needs to re - run when either  currentPage, pageSize, siblingCount, or totalCount changes.
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};
