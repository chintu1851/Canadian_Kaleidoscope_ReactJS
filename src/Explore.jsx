import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Explore = () => {
    const navigate = useNavigate()

    const handleHistoryClick = () => {
        navigate('/history');
    };
    const handleHeritageClick = () => {
        navigate('/heritage');
    };
    const handleEventClick = () => {
        navigate('/events');
    };
    const list = [
        {
            id: 1,
            content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation's history and culture.",
            img: '/img8.jpg',
            heading: 'History',
            onclick: handleHistoryClick,
        },
        {
            id: 2,
            content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation's history and culture.",
            img: '/img11.jpg',
            heading: 'Cultural Heritage',
            onclick: handleHeritageClick,
        },
        {
            id: 3,
            content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation's history and culture.",
            img: '/img13.jpg',
            heading: 'Events',
            onclick: handleEventClick,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header></Header>
            <img src='/canada.jpg' alt='event' className='imgevents'></img>
            <h1 className='eventh1'>Explore</h1>
            {list.map((item) => (
                <div key={item.id} >
                    {item.id % 2 === 1 ? (

                        <div className='explore'>

                            <div className='detail'>
                                <h2 className='h2explore'>{item.heading}</h2>
                                <p>{item.content}</p>
                                <button className='learnmore' onClick={item.onclick}>Learn More</button>
                            </div>
                            <div>
                                <img src={item.img} alt='firstimage' className="expimages" />
                            </div>
                        </div>
                    ) :
                        (
                            <div className='explore'>
                                <div>
                                    <img src={item.img} alt='firstimage' className="expimages" />
                                </div>
                                <div className='detail'>
                                    <h2 className='h2explore'>{item.heading}</h2>
                                    <p>{item.content}</p>
                                    <button className='learnmore' onClick={item.onclick}>Learn More</button>
                                </div>
                            </div>
                        )
                    }

                </div>
            ))}
            <Footer />
        </div>
    );
};

export default Explore;
