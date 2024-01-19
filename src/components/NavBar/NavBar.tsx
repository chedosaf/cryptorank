'use client';
import { FC } from 'react';
import Link from 'next/link';

import NavBarContainer from './styles';

// add new pages if needed
const navLinks = [
  { id: 1, href: '/converter', title: 'Converter' },
  { id: 2, href: '/watchlist', title: 'Cryptocurrency rates' },
];
// add headTitle for diff pages
const NavBar: FC = () => {
  return (
    <>
      <NavBarContainer>
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.href}>
            {navLink.title}
          </Link>
        ))}
      </NavBarContainer>
    </>
  );
};

export default NavBar;
