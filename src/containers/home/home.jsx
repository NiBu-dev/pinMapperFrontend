import React from "react";
import styled from "styled-components";

const HomeLayout = styled.div`
    
`;

const ImageSection = styled.section`
    min-height: 35vh;
    width: 100%;
`;

const FaqSection = styled.section`
    min-height: 20vh;
    margin: 0 15%;
`;

const CardsSection = styled.section`
    margin: 0 15%;
`;

const HomeComponent = () => {
    return (
        <HomeLayout data-tag="home-layout--div">
            <ImageSection data-tag="image-section">
                image
            </ImageSection>
            <FaqSection data-tag="faq-section">
                Faq
            </FaqSection>
            <CardsSection data-tag="cards-section">
                Product
            </CardsSection>
        </HomeLayout>
    )
};

export default HomeComponent;