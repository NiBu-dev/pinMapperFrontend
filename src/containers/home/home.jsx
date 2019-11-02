import React from "react";
import styled from "styled-components";
import ImageComponent from "../../components/home/Image";
import FaqComponent from "../../components/home/faq";
import FeaturedComponent from "../../components/home/featured";
import ProductsComponent from "../../components/home/products/products";

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

const FeaturedSection = styled.section`
    margin: 0 15%;
`;

const CardsSection = styled.section`
    margin: 0 15%;
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
            <FeaturedSection data-tag="feature-section">
                <FeaturedComponent />
            </FeaturedSection>
            <CardsSection data-tag="cards-section">
                <ProductsComponent />
            </CardsSection>
        </HomeLayout>
    )
};

export default HomeComponent;