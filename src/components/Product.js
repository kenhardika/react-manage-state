import React from 'react';
import Checkbox from './Checkbox';

export default function Product() {
    return (
        <div className='flex flex-row gap-2 justify-center'>
            <Checkbox/>
            <div>
                Product Avatar
            </div>
            <div>
                Product Details
            </div>
        </div>
    );
}