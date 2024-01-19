import React, { useEffect, useState } from 'react';

import { StyledPageButton } from '../PageButton/styles';

interface IPagesNavProps {
  selectedPage: number;
  totalPages: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

// add constants for magic numbers

const generatePages = (totalPages: number, selectedPage: number) => {
  const isInRange = (value: number, start: number, end: number) =>
    value >= start && value <= end;

  if (totalPages <= 0 || selectedPage <= 0 || selectedPage > totalPages) {
    return [];
  }

  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  if (selectedPage < 5) {
    return [
      ...Array.from({ length: 5 }, (_, index) => index + 1),
      '...',
      totalPages,
    ];
  }
  if (selectedPage > totalPages - 4) {
    return [
      1,
      '...',
      ...Array.from({ length: 5 }, (_, index) => totalPages - 5 + index + 1),
    ];
  }
  if (isInRange(selectedPage, 5, totalPages)) {
    const start = selectedPage - 2;
    return [
      1,
      '...',
      ...Array.from({ length: 5 }, (_, index) => start + index),
      '...',
      totalPages,
    ];
  }
  return [];
};

const PagesNav = ({
  selectedPage,
  totalPages,
  setSelectedPage,
}: IPagesNavProps) => {
  const [pages, setPages] = useState<(number | string)[]>([]);

  useEffect(() => {
    setPages(generatePages(totalPages, selectedPage));
  }, [selectedPage, totalPages]);

  return (
    <>
      {pages.map((page, i) => (
        <StyledPageButton
          $selected={selectedPage === page}
          key={page.toString() + i}
          onClick={() => {
            if (page === '...') return;
            setSelectedPage(page as number); // do not forget to remove as and add rigth type
          }}
        >
          {page}
        </StyledPageButton>
      ))}
    </>
  );
};

export default PagesNav;
