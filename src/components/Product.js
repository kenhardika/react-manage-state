import React from 'react';
import Checkbox from './Checkbox';

export default function Product({productName}) {
    return (
        <div className='flex flex-row gap-2 justify-start items-center'>
            <Checkbox/>
            <div>
                {productName}
            </div>
            <div>
                Product Details
            </div>
        </div>
    );
}