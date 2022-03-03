import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;

const TopLeft = styled.div`
  
`;

const TopRight = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
  & li {
    padding: 0 4px;

  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <TopLeft>
        <p>Event Tide</p>
      </TopLeft>
      <TopRight>
        <li>about</li>
        <li>service</li>
        <li>contact</li>
      </TopRight>
    </Wrapper>
  );
}

export default NavBar;