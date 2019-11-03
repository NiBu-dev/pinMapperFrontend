import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/main.jpg";

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
`; 

const Image = styled.div`
    height: 35vh;
    background-size: cover;
    background-position: center;
    // background-image: url(${Background});
    background-image: linear-gradient(rgba(255,0,0, .4), rgba(0,0,255, .4)), url(${Background});
`;

const TitleOverlay = styled.h1`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Liu Jian Mao Cao', cursive;
`;

const ImageComponent = () => {
    return (
        <ImageLayout data-tag="image-layout">
            <TitleOverlay>Pin Mapper</TitleOverlay>
            <Image/>
        </ImageLayout>
    )
};

export default ImageComponent;