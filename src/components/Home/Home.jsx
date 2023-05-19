import React from 'react';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Collection from '../Collection/Collection';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Collection></Collection>
            <Customer></Customer>
            
        </div>
    );
};

export default Home;