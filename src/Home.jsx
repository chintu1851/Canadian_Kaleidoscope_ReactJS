import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
import './about.css';
import './home.css';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const Home = () => {
       useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div>
                <img src='/homeimg.jpg' alt='event' className='imagehome'></img>
            </div>
            <div className='hometext'>
                <p>
                    Welcome to Canadian Cultural Kaleidoscope, your gateway to the vibrant world of Canadian arts and culture.
                    The website provides the diverse and vibrant range of artistic expressions that characterize Canada.
                    From indigenous traditions to contemporary art
                    movements, we invite you to explore the multifaceted world of Canadian creativity.
                </p>
                <button onClick={() => navigate('explore') } className='.hbutton' >Explore</button>
            </div>
            <Footer />
        </div>
    )
}
export default Home
