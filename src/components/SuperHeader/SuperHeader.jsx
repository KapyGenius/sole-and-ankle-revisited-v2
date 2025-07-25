import React from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 10px;
  padding-top: 10px;
  background-color: ${COLORS.gray[900]};
  overflow: hidden;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 0.875rem;
    color: ${COLORS.gray[300]};
    height: 40px;
    padding: 0 32px;
    overflow: revert;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
