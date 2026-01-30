import React from 'react';
import { useParams } from 'react-router';

const Category = () => {
    const parameters = useParams();
    console.log(parameters);
    const { id } = parameters;
    return (
        <div>
            afdgvcbfhz {id}
        </div>
    );
};

export default Category;