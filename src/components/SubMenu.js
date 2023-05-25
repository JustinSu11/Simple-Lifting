import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid darkgrey;
        curser: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #313131;
    height: 60px;
    padding-left: 4rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
    justify-content: space-between;

    &: hover {
        background: darkgrey;
        cursor: pointer;
    }
`;

const DropdownLinkTwo = styled(Link)`
    background: #424242;
    height: 60px;
    padding-left: 5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
    justify-content: space-between;

    &: hover {
        background: darkgrey;
        cursor: pointer;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const [subSubnav, setSubSubnav] = useState(false)
    const [selectedSubItemIndexes, setSelectedSubItemIndexes] = useState([]);
    const showSubnav = () => setSubnav(!subnav);
    const showSubSubnav = (index) => {
        if (selectedSubItemIndexes.includes(index)) {
            setSelectedSubItemIndexes(selectedSubItemIndexes.filter(i => i !== index)); // check if the selectedSubItemIndexes array contains the selected index, if it does then it will return a new array without the selected index, if false it will spread the selectedSubItemIndexes array and add the selected index to it.
        } else {
            setSubSubnav(true); // shows the subnav for the index
            setSelectedSubItemIndexes([...selectedSubItemIndexes, index]); // update selected subItems to show new subnav
        }
    };      
    
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((subItem, index) => {
                return (
                    <>
                        <DropdownLink to={subItem.path} key={index} onClick={() => {
                            subItem.subNav && showSubSubnav(index); // passing selected indexes to the showSubSubnav function not necessary unless adding additional items
                        }}>
                            <div>
                                <Label>{subItem.title}</Label>
                            </div>
                            <div>
                                {subItem.subNav && selectedSubItemIndexes.includes(index) ? subItem.iconOpened : subItem.subNav ? subItem.iconClosed : null}
                            </div>
                        </DropdownLink>
                        {subSubnav && selectedSubItemIndexes.includes(index) && subItem.subNav.map((subSubItem, index) => {
                            // selectedSubItemIndexes.includes(index) checks if the array includes the selected index of the current subItem. If it does then the map method returns the subSubItems of the selected subItem
                            return (
                                <DropdownLinkTwo to={subSubItem.path} key={index}>
                                    <div>
                                        <Label>{subSubItem.title}</Label>
                                    </div>
                                </DropdownLinkTwo>
                            )
                        })}
                    </>
                );
            })}
        </>
    );
};

export default SubMenu;