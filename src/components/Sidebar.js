import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: aliceblue;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  background: aliceblue;
  width: ${({ showSidebar }) => (showSidebar ? '250px' : '0')};
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const WName = styled.a`
  text-decoration: none;
`;

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: 'gray' }}>
        <Nav>
          <WName href="/about-us">
            <h1 style={{ textAlign: 'center', marginLeft: '200px', color: 'gray' }}>Simple Lifting</h1>
          </WName>
          {showSidebar && (
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={() => setShowSidebar(false)} />
            </NavIcon>
          )}
        </Nav>
        <SidebarNav showSidebar={showSidebar}>
          <SidebarWrap>
            {!showSidebar && (
              <NavIcon to="#">
                <FaIcons.FaBars onClick={() => setShowSidebar(true)} />
              </NavIcon>
            )}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
