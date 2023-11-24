import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header></Header>
            <img src='/img14.jpg' alt='event' className='imgevents'></img>
            <h1 className='eventh1'>About Us</h1>
            <div className='aboutus'>
                <h2>Our Vision</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                    rerum illo neque accusamus, perferendis totam autem, iste officia
                    sed corporis minima?Facere sapiente consequatur vel
                    distinctio eos eaque neque iusto. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Nobis rerum illo neque
                    accusamus, perferendis totam autem, iste officia sed corporis minima?
                    Facere sapiente consequatur vel distinctio eos eaque neque iusto.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                    rerum illo neque accusamus, perferendis totam autem, iste officia
                    sed corporis minima?Facere sapiente consequatur vel
                    distinctio eos eaque neque iusto. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Nobis rerum illo neque
                    accusamus, perferendis totam autem, iste officia sed corporis minima?
                    Facere sapiente consequatu Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                    rerum illo neque accusamus, perferendis totam autem, iste officia
                    sed corporis minima?Facere sapiente consequatur vel
                    distinctio eos eaque neque iusto. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Nobis rerum illo neque
                    accusamus, perferendis totam autem, iste officia sed corporis minima?
                    Facere sapiente consequatur vel distinctio eos eaque neque iusto.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                    rerum illo neque accusamus, perferendis totam autem, iste officia
                    sed corporis minima?Facere sapiente consequatur vel
                    distinctio eos eaque neque iusto. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Nobis rerum illo neque
                    accusamus, perferendis totam autem, iste officia sed corporis minima?
                    Facere sapiente consequatur vel distinctio eos eaque neque iusto.
                </p>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default About
