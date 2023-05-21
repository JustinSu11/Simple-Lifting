import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #212121;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WName = styled.a`
  text-decoration: none;
  margin-left: 2rem;
  font-size: 2rem;
  color: #ffffff;
  position: relative;
  z-index: 2;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-right: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ToggleIcon = styled(FaIcons.FaBars)`
  font-size: 1.5rem;
  color: #ffffff;
`;

const SidebarNav = styled.nav`
  background: #212121;
  width: ${({ showSidebar }) => (showSidebar ? '250px' : '0')};
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 1;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding-top: 100px;
`;

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#ffffff' }}>
        <Nav>
          <WName href="/about-us">Simple Lifting</WName>
          {showSidebar ? null : (
            <ToggleButton onClick={toggleSidebar}>
              <ToggleIcon />
            </ToggleButton>
          )}
        </Nav>
        <SidebarNav showSidebar={showSidebar}>
          <SidebarWrap>
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
