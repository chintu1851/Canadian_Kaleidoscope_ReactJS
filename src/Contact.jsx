import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (name === '' || email === '' || subject === '') {
            alert(`Please Enter Values`);
        } else {
            alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <img src='/contact.jpg' alt='contact' className='imgevents' />
            <h1 className='eventh1'>Contact Us</h1>
            <div className='contact'>
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>User Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={handleNameChange}
                        required
                    />

                    <label htmlFor='Email'>User Email:</label>
                    <input
                        type='email'
                        id='Email'
                        name='Email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    <label htmlFor='subject'>Subject:</label>
                    <textarea
                        id='subject'
                        name='subject'
                        placeholder='Enter your subject'
                        value={subject}
                        onChange={handleSubjectChange}
                        required
                    ></textarea>

                    <button type='submit' className='hbutton'>
                        Submit
                    </button>
                </form>
            </div>
            <div>
                <h2>Contact Information</h2>
                <div className='contactdetail'>
                    <div>
                        <img src='/call.jpg' alt='call' className='phone' />
                        <h3>Call</h3>
                        <h4>+1 (437)-299-8374</h4>
                    </div>
                    <div>
                        <img src='/gmail.jpg' alt='email' className='phone' />
                        <h3>Email</h3>
                        <h4>patelchintan18@gmail.com</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
