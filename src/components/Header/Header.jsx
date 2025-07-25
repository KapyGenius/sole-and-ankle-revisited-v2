import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavButtons>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="search" strokeWidth={1} />
        </UnstyledButton>
        <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Icon id="menu" strokeWidth={1} />
        </UnstyledButton>
        </NavButtons>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onOpenChange={(open) => setShowMobileMenu(open)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: none;
  @media ${QUERIES.laptopAndUp} { 
    display: flex;
    gap: clamp(16px, 2vw ,48px);
    margin: 0px 48px;
    padding-bottom: 10px;
    overflow: scroll;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Side = styled.div`
  flex: 0;
  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
