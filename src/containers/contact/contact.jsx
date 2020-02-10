import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
    color: ${props => props.theme.primary_color};
    font-weight: 600;
    font-family: 'Liu Jian Mao Cao', cursive;

`;

const Form = styled.form`
    width: 90%;
    max-width: 600px;
    padding: 1rem;
    background: ${props => props.theme.secondary_color_rgba_3};

    input:placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(4rem);
    }

    @media screen and (max-width: 768px) {
        width: 90%;
	}

`;

const FormGroup = styled.div`
    width: 100%;

`;

const Label = styled.label`
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin-left: 30px;
    margin-top: 5px;
    display: block;
    transition: all .3s;
    transform: translateY(-90px);

`;

const Input = styled.input`
    font-size: 16px;
    font-family: inherit;
    color: inherit;
    padding: 16px 24px;
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
        box-shadow: 0 16px 24px rgba(black, .1);
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
    font-size: 16px;
    font-family: inherit;
    color: inherit;
    padding: 16px 24px;
    border-radius: 2px;
    background-color: rgba(white, .5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    margin: auto;
    display: block;
    transition: all .3s;

    &:focus {
        outline: none;
        box-shadow: 0 16px 24px rgba(black, .1);
        border-bottom: 3px solid blue;
    }
`;


const SubmitButton = styled.button`
    margin-left: 50%;
    margin-top: 16px;
    transform: translateX(-50%);
    color: white;
    background: #4d9fb9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4d9fb9, #94cce0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4d9fb9, #94cce0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 16px 24px;
    border-radius: 100px;
    border: none;
    position: relative;
    z-index: 100;
    outline: none;



    &:hover,
    &:active {
        transform: translate(-50%, -3px);
        box-shadow: 0 1rem 2rem rgba(black,.2);
        outline: none;
    }

    &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -2;
        border-radius: 100px;
        background: #4d9fb9;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4d9fb9, #94cce0);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4d9fb9, #94cce0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        transition: .4s;
    }

    &:hover:after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

`;

const ContactComponent = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const onHandleChange = (event, type) => {
        switch (type) {
            case 'name':
                setUserName(event.target.value);
                break;
            case 'email':
                setUserEmail(event.target.value);
                break;
            case 'message':
                setUserMessage(event.target.value);
                break;
            default:
                break;
        }
    };

    const resetForm = () => {
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        axios.post('/mailer/send', {
            data: {
                name: userName,
                email: userEmail,
                message: userMessage
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    return (
        <ContactLayout data-tag="contact-layout">
            <ContactTitle data-tag="contact-title--h1">Say hello!</ContactTitle>
            <Form data-tag="form" onSubmit={handleSubmit}>
                <FormGroup data-tag="form-group--div">
                    <Input data-tag="input" type="text" placeholder="Name" id="name" value={userName} onChange={event => onHandleChange(event, 'name')} required />
                    <Label data-tag="label" htmlFor="name">Name</Label>
                </FormGroup>
                <FormGroup data-tag="form-group--div">
                    <Input data-tag="input" type="email" placeholder="Email" id="email" value={userEmail} onChange={event => onHandleChange(event, 'email')} required />
                    <Label data-tag="label" htmlFor="email">Email</Label>
                </FormGroup>
                <FormGroup data-tag="form-group--div">
                    <TextArea data-tag="textarea" rows="5" id="message" placeholder="e.g. example" value={userMessage} onChange={event => onHandleChange(event, 'message')} required></TextArea>
                </FormGroup>
                <SubmitButton data-tag="submit-button" type="submit">Send</SubmitButton>
            </Form>
        </ContactLayout>
    )
}

export default ContactComponent;