import React from 'react'
import './header.css';
import { useNavigate } from 'react-router-dom';
  


const Header = () => {
  const navigate = useNavigate()

 const handlehome = () => {
        navigate('/');
    };
    // const handleHistoryClick = () => {
    //     navigate('/history');
    // };
    // const handleHeritageClick = () => {
    //     navigate('/heritage');
    // };
    // const handleEventClick = () => {
    //     navigate('/events');
    // };
    const handleresource = () => {
        navigate('/resources');
    };
     const handleExplore = () => {
        navigate('/explore');
    };
    const handleabout = () => {
        navigate('/about');
    };
    const handlecontact = () => {
        navigate('/contact');
    };
  return (
    <div className='headerbackground'>
      <div className='headpart'>
        <div>
          <img src='/klogo.png' alt='logo' className='headimg'></img>
        </div>
        <div>
          <ul>
            <li className='hlink' onClick={handlehome}>Home</li>
            <li className='hlink' onClick={handleExplore}>Explore</li>
            <li className='hlink' onClick={handleresource}>Resources</li>
            <li className='hlink' onClick={handleabout}>About Us</li>
            <li className='hlink' onClick={handlecontact}>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
