import React from 'react';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Collection from '../Collection/Collection';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shop></Shop>
            <Gallery></Gallery>
            <Collection></Collection>
            <Customer></Customer>
            
        </div>
    );
};

export default Home;