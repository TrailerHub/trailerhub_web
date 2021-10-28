
import React from 'react'
import { LoadingContainer, Wall } from './LoadingElements';
import Lottie from 'react-lottie';
import data from '../../lotties/loading_lottie.json'
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Loading = () => {
    const { width } = useWindowDimensions();

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
                height={width * 0.3}
                width={width * 0.3}
            />
        </LoadingContainer>
    );
}

export default Loading;