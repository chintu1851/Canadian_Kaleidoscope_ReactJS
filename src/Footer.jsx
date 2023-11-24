import React from 'react'
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()

    const handlehome = () => {
        navigate('/');
    };
    const handleHistoryClick = () => {
        navigate('/history');
    };
    const handleHeritageClick = () => {
        navigate('/heritage');
    };
    const handleEventClick = () => {
        navigate('/events');
    };
    const handleExplore = () => {
        navigate('/explore');
    };
    const handleresource = () => {
        navigate('/resources');
    };
    const handleabout = () => {
        navigate('/about');
    };
    const handlecontact = () => {
        navigate('/contact');
    };

    return (

        <div className='footerbackground'>
            <div className='footerpart'>
                <div>
                    <img src='/klogo.png' alt='logo' className='footerimg'></img>
                </div>
                <div>
                    <ul class="footerul">
                        <li className='link' onClick={handlehome}>Home</li>
                        <div>
                            <li className='link' onClick={handleExplore}> Explore </li>

                                <p className='submenu'>
                                    <p onClick={handleHistoryClick} className='link'>History</p>
                                    <p onClick={handleHeritageClick} className='link'>Heritage</p>
                                    <p onClick={handleEventClick} className='link'>Events</p>
                                </p>
                           
                        </div>
                        <li className='link' onClick={handleresource}>Resources</li>
                        <li className='link' onClick={handleabout}>About Us</li>
                        <li className='lastchild link' onClick={handlecontact}>Contact Us</li>
                    </ul>

                </div>
                <div className='social'>
                    <h4>Social Media Links</h4>
                    <div className="social-images">
                        <img src='/fb.jpeg' alt='1' />
                        <img src='/twit.png' alt='2' />
                        <img src='/yt.png' alt='3' />
                        <img src='/insta.jpeg' alt='4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
