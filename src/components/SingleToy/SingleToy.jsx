import React from 'react';
import './SingleToy.css'
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {

    const data = useLoaderData([])
    console.log(data)
    return (
        <div>
            <h1>this is single toy page</h1>
        </div>
    );
};

export default SingleToy;