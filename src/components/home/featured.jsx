import React from "react";
import styled from "styled-components";
import FeaturedImg from "../../assets/images/aurix.jpeg";

const FeaturedLayout = styled.div`
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid gray;
    display: flex;
`;

const FeaturedProduct = styled.div`
    position: relative;
    width: 40%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(255,0,0, .1), rgba(0,0,255, .2)), url(${FeaturedImg});
`;

const FeaturedContentContainer = styled.div`
    min-width: 200px;
    margin-left: 24px;
`;

const FeaturedUcTitle = styled.h2`

`;

const UcFeaturesContainer = styled.ul`

`;

const UcFeature = styled.li`

`;

const FeaturedComponent = () => {
    return (
        <FeaturedLayout data-tag="featured-layout--div">
            <FeaturedProduct>
            </FeaturedProduct>
            <FeaturedContentContainer data-tag="featured-content-container--div">
                <FeaturedUcTitle>
                    Aurix TC277
                </FeaturedUcTitle>
                <UcFeaturesContainer>
                    <UcFeature>
                        Scalability in terms of performance, packages, memory and peripherals for flexibility across platform concepts
                    </UcFeature>
                    <UcFeature>
                        BGA 292 package
                    </UcFeature>
                    <UcFeature>
                        60 A/D Input Lines (incl. FADC)
                    </UcFeature>
                    <UcFeature>
                        64 DMA Channels
                    </UcFeature>
                    <UcFeature>
                        4 CAN nodes
                    </UcFeature>
                </UcFeaturesContainer>
            </FeaturedContentContainer>
        </FeaturedLayout>
    )
};

export default FeaturedComponent;