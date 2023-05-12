import React from 'react';
import styled from 'styled-components';

const HeaderCenter = styled.div`
    display: flex;
    justify-content: center;
`;

export const AboutUs = () => {
    return (
        <HeaderCenter className='home'>
            <h2>Welcome</h2>
        </HeaderCenter>
    );
};

export const OurAim = () => {
    return (
        <div className='home'>
            <h1>GeeksforGeeks Aim</h1>
        </div>
    );
};

export const OurVision = () => {
    return (
        <div className='home'>
            <h1>GeeksforFeeks Vision</h1>
        </div>
    );
};