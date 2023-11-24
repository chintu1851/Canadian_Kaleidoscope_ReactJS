import React from 'react'
import Layout from './Layout'
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const user = [
    {
        id: 1,
        content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation history and culture.",
        img: '/img6.jpg'
    },
    {
        id: 2, content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation history and culture.",
        img: '/img4.jpg'
    },
    {
        id: 3, content: "Indigenous Peoples of Canada have a rich and diverse heritage, including First Nations, Inuit, and Métis. These communities have unique languages, cultures, and histories that span millennia. Indigenous rights and land entitlements, often defined by historic treaties, are central to their identity. However, contemporary challenges persist, such as disparities in healthcare, education, and housing. Issues like missing and murdered Indigenous women and the legacy of residential schools remain significant concerns. Despite these challenges, Indigenous communities are actively working to preserve their languages, traditions, and cultures, contributing to a resurgence in Indigenous art, music, and storytelling. Canada's ongoing process of reconciliation seeks to address historical injustices and build stronger relationships with Indigenous Peoples, acknowledging their vital contributions to the nation history and culture.",
        img: '/img5.jpg'
    },

]
const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header></Header>
            <img src='/events.jpg' alt='event' className='imgevents'></img>
            <h1 className='eventh1'>Events</h1>
            <Layout user={user} />
            <Footer></Footer>
        </div>
    )
}

export default Events
