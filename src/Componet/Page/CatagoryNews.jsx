import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {
    const {id} = useParams();
    return (
        <div>
            catagory{id}
        </div>
    );
};

export default CatagoryNews;