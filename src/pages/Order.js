import React, { useState } from 'react';
import Product from '../components/Product';
import Store from '../components/Store';

export default function Order() {
    const [data, setData]  = useState({});
    
    return (
        <div className='h-full bg-scroll bg-gray-300'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <div className=''>
                    select all section
                </div>
                
                <Store>
                    <Product/>
                    <Product/>
                </Store>
                <Store>
                    <Product/>    
                </Store> 
            </div>                
        </div>
    );
}
