import React from 'react';
import styled from 'styled-components';
import VideoBody from '../features/videobody/VideoBody';
import PictureBody from '../features/picturebody/PictureBody';

const HeaderCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const TextBody = styled.p`
    display: flex;
    justify-content: center;
`;

export const Exercises = () => {
    return (
        <>
            <HeaderCenter className='home'>
                <h2>Exercises</h2>
            </HeaderCenter>
            <TextBody className='home'>Here you will find a collection of exercises I personally use in my own weight-lifting program.</TextBody>
        </>
    );
};

export const Chest = () => {
    return (
        <div className='home'>
            <h1>Chest</h1>
        </div>
    );
};

export const ChestPress = () => {
    return (
        <div className='home'>
            <h1>Chest Press</h1>
        </div>
    )
}

export const Shoulders = () => {
    return (
        <div className='home'>
            <h1>Shoulders</h1>
        </div>
    );
};