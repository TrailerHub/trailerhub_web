import React from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { ContactWrapper, TextArea, ContactInfoTextLink, Form, TextInput, SubmitButton, GridWrapper, ContactInfoWrapper, ButtonWrapper, Heading, ComponentWrapper, HeadingWrapper, ContactInfoText } from './ContactElements';

export default function Contact({light}) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wrq0r7l', 'template_nd9njxp', e.target, 'user_BnyABt5lDPRUrDZogOruU')
            .then((result) => {
                console.log(result.text);
                toast('Sent! We\'ll get back to you soon.', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (error) => {
                console.log(error.text);
                toast('Something went wrong, sorry!, please email us at support@trailerhub.io', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return (
        <ComponentWrapper id="contact" light={light}>
            <HeadingWrapper>
                <Heading light={light}>Contact Us</Heading>
            </HeadingWrapper>
            <HeadingWrapper>
                <ContactInfoWrapper>
                    <ContactInfoTextLink href="tel:+18887779423" light={light}>(888) - 777 - 9423</ContactInfoTextLink>
                    <ContactInfoText light={light}>support@trailerhub.io</ContactInfoText>
                </ContactInfoWrapper>
            </HeadingWrapper>
            <ContactWrapper>
                <Form onSubmit={(e) => sendEmail(e)}>
                    <GridWrapper>
                        <TextInput placeholder="Name" aria-label="Name" type="text" name="user_number" light={light}/>
                        <TextInput placeholder="Email" aria-label="Email" type="email" name="user_email" light={light}/>
                    </GridWrapper>
                    <TextArea placeholder="Message" aria-label="Message" name="message" light={light}/>
                    <ButtonWrapper>
                        <SubmitButton role="button" type="submit" />
                    </ButtonWrapper>
                </Form>
            </ContactWrapper>
        </ComponentWrapper>
    );
}