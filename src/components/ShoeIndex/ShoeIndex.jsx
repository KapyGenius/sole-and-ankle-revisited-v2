import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <RemoveMobile>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </RemoveMobile>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <RemoveTable>
          <Spacer size={42} />
        </RemoveTable>
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: baseline;
  gap: 8px;
  @media ${QUERIES.laptopAndUp} {
   flex-direction: row-reverse;
   gap: 32px;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 0px;
  @media ${QUERIES.laptopAndUp} {
    flex-basis: 248px;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const RemoveMobile = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const RemoveTable = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

export default ShoeIndex;
