import React from 'react';

import LeftArrow from '@/icons/LeftArrow.svg';
import RightArrow from '@/icons/RightArrow.svg';

import StyledImage from '../Image/styles';
import PagesNav from './components/PagesNav/PagesNav';
import { PagesConteiner, PaginationConteiner } from './styles';

interface IPaginationProps {
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination = ({
  selectedPage,
  setSelectedPage,
  totalPages,
}: IPaginationProps) => {
  return (
    <PaginationConteiner>
      <StyledImage
        src={LeftArrow}
        width={32}
        height={32}
        alt='Step to the Left'
        onClick={() =>
          setSelectedPage((prev) => {
            if (prev < 2) return prev;
            return prev - 1;
          })
        }
      />
      <PagesConteiner>
        <PagesNav
          selectedPage={selectedPage}
          totalPages={totalPages}
          setSelectedPage={setSelectedPage}
        />
      </PagesConteiner>

      <StyledImage
        src={RightArrow}
        width={32}
        height={32}
        alt='Step to the Right'
        onClick={() =>
          setSelectedPage((prev) => {
            if (prev === totalPages) return prev;
            return prev + 1;
          })
        }
      />
    </PaginationConteiner>
  );
};

export default Pagination;
