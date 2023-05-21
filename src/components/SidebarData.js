import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Exercises',
        path: '/exercises',
        icon: <GiIcons.GiStrongMan/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Chest',
                path: '/exercises/chest',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subNav: [
                    {
                        title: 'Chest Press',
                        path: '/exercises/chest/chestpress',
                    },
                    {
                        title: 'Incline Chest Press',
                        path: '/exercises/chest/inclinechestpress',
                    }
                ]
            },
            {
                title: 'Shoulders',
                path: '/exercises/shoulders',
            },
        ],
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaPhone />,
    }
];