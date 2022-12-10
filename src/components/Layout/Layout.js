import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Layout;