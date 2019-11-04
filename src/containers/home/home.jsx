import React from "react";
import styled from "styled-components";
import ImageComponent from "../../components/home/Image";
import FaqComponent from "../../components/home/faq";
import ProductsComponent from "../../components/home/products/products";

const HomeLayout = styled.div`
    
`;

const ImageSection = styled.section`
    min-height: 30vh;
    width: 100%;
`;

const FaqSection = styled.section`
    min-height: 20vh;
`;


const CardsSection = styled.section`

`;

const HomeComponent = () => {
    return (
        <HomeLayout data-tag="home-layout--div">
            <ImageSection data-tag="image-section">
                <ImageComponent />
            </ImageSection>
            <FaqSection data-tag="faq-section">
                <FaqComponent />
            </FaqSection>
            <CardsSection data-tag="cards-section">
                <ProductsComponent />
            </CardsSection>
        </HomeLayout>
    )
};

export default HomeComponent;