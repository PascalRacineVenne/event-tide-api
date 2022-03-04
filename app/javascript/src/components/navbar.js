import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
`;

const TopLeft = styled.h2`
  padding-right: 32px;
  color: var(--primary-light-gray);
`;

const TopRight = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
  & li {
    padding: 8px 16px;
    opacity: 0.7;

  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <TopLeft>
        Event Tide REST API
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