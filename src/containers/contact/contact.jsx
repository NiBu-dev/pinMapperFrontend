import React from "react";
import styled from "styled-components";
import { Button } from "../../components/UI/button";

const ContactLayout = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContactTitle = styled.h1`
    margin-bottom: 24px;
`;

const Form = styled.form`
    padding: 24px;
    width: 400px;
    background: #f3f3f3;


    input:placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(4rem);
    }

`;

const FormGroup = styled.div`
    width: 100%;

`;

const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: .7rem;
    display: block;
    transition: all .3s;
    transform: translateY(-8rem);

`;

const Input = styled.input`
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(white, .5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    margin: auto;
    display: block;
    transition: all .3s;

    @include respond(tab-port) {
        width: 100%;
    }

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(black, .1);
        border-bottom: 3px solid blue;
    }

    &:focus:invalid {
        border-bottom: 3px solid red;
    }

    &::-webkit-input-placeholder {
        color: gray;
    }
`;

const TextArea = styled.textarea`
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(white, .5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    margin: auto;
    display: block;
    transition: all .3s;
`;

const SubmitButton = styled(Button)`
    margin-left: 50%;
    margin-top: 16px;
    transform: translateX(-50%);
`;

const ContactComponent = () => {
    return (
        <ContactLayout data-tag="contact-layout">
            <ContactTitle data-tag="contact-title--h1">Contact us:</ContactTitle>
            <Form data-tag="form">
                <FormGroup data-tag="form-group--div">
                    <Input data-tag="input" type="text" placeholder="Name" id="name" />
                    <Label data-tag="label" htmlFor="name">Name</Label>
                </FormGroup>
                <FormGroup data-tag="form-group--div">
                    <Input data-tag="input" type="email" placeholder="Email" id="email" />
                    <Label data-tag="label" htmlFor="email">Email</Label>
                </FormGroup>
                <FormGroup data-tag="form-group--div">
                    <TextArea data-tag="textarea" rows="5" id="message" placeholder="Message"></TextArea>
                    {/* <Label data-tag="label" htmlFor="message">Message</Label> */}
                </FormGroup>
                <SubmitButton data-tag="submit-button" type="submit">Send</SubmitButton>
            </Form>
        </ContactLayout>
    )
}

export default ContactComponent;