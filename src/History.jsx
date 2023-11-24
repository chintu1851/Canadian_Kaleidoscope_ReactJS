import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './about.css';

import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';

const user = [
    {
        id: 1,
        content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation history and culture.",
        img: '/img1.jpg'
    },
    {
        id: 2, content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation history and culture.",
        img: '/img2.jpg'
    },
    {
        id: 3, content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation history and culture.",
        img: '/img3.jpg'
    },

]

const History = () => {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div>
            <Header></Header>
            <img src='/historyimg.jpg' alt='event' className='imgevents'></img>
            <h1 className='eventh1'>History</h1>
            <Layout user={user} />
            <Footer/>
        </div>
    );

}
// const About = () => {
//     // const navigate = useNavigate()
//     return (
//         <div>
//             <Person ></Person>
//             {/* <button onClick={()=>{navigate(-1)}}>Go Back</button> */}
//         </div>
//     )
// }

export default History
