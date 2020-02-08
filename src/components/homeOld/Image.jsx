import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/main.jpg";

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    margin: auto;
`; 

const Image = styled.div`
    height: 30vh;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(248, 80, 50, .6), rgba(0,0,255, .4)), url(${Background});
    border-radius: 0 0 5% 5%/0 0 100% 100%;
`;

const TitleOverlay = styled.h1`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-weight: 700;
`;

const ByText = styled.h2`
    position: absolute;
    top: 30%;
    left: 60%;
    color: white;
    font-family: 'Liu Jian Mao Cao', cursive;
    font-size: 25px;
    font-weight: 700;
`;

const ImageComponent = () => {
    return (
        <ImageLayout data-tag="image-layout">
            <TitleOverlay>Pin Mapper</TitleOverlay>
            <ByText>By engineers for engineers</ByText>
            <Image/>
        </ImageLayout>
    )
};

export default ImageComponent;