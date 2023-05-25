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

export const InclineChestPress = () => {
    return (
        <div className='home'>
            <h1>Incline Chest Press</h1>
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

export const ShoulderPress = () => {
    return (
        <div className='home'>
            <h1>Shoulder Press</h1>
        </div>
    );
};

export const LateralRaises = () => {
    return (
        <div className='home'>
            <h1>Lateral Raises</h1>
        </div>
    );
};

export const RearDeltFly = () => {
    return (
        <div className='home'>
            <h1>Rear Delt Fly</h1>
        </div>
    );
};

export const Tricep = () => {
    return (
        <div className='home'>
            <h1>Tricep</h1>
        </div>
    );
};

export const TricepPushdown = () => {
    return (
        <div className='home'>
            <h1>Tricep Pushdown</h1>
        </div>
    );
};

export const OverheadTricepExtension = () => {
    return (
        <div className='home'>
            <h1>Overhead Tricep Extension</h1>
        </div>
    );
};