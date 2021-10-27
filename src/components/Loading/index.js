
import React from 'react'
import { LoadingContainer, Wall } from './LoadingElements';
import Lottie from 'react-lottie';
import data from '../../lotties/loading_lottie.json'

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <LoadingContainer>
            <Wall />
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </LoadingContainer>
    );
}

export default Loading;