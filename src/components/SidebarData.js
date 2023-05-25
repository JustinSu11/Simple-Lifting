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
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subNav: [
                    {
                        title: 'Shoulder Press',
                        path: '/exercises/shoulders/shoulderpress',
                    },
                    {
                        title: 'Lateral Raises',
                        path: '/exercises/shoulders/lateralraises',
                    },
                    {
                        title: 'Rear Delt Fly',
                        path: '/exercises/shoulders/reardeltfly ',
                    }
                ]
            },
            {
                title: 'Triceps',
                path: '/exercises/triceps',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subNav: [
                    {
                        title: 'Tricep Pushdown',
                        path: '/exercises/tricep/triceppushdown',
                    },
                    {
                        title: 'Overhead Tricep Extension',
                        path: '/exercises/tricep/overheadtricepextension',
                    }
                ]
            },
            {
                title: 'Back',
                path: '/exercises/back',
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,

                subNav: [
                    {
                        title: 'Lat Pulldowns',
                        path: '/exercises/back/latpulldown',
                    },
                    {
                        title: 'Seated Cable Rows',
                        path: '/exercises/back/seatcablerow',
                    },
                    {
                        title: 'Bent Over Barbell Rows',
                        path: '/exercises/back/bentovrbbrow',
                    }
                ]
            },
        ],
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaPhone />,
    }
];