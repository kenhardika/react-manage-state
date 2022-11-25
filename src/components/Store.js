import React from 'react';
import Checkbox from './Checkbox';

export default function Store({children, storeName}) {
    return (
        <div className='w-[800px] h-auto bg-slate-300 flex flex-col justify-center' >
            <div className='flex flex-row w-[600px] items-center'>
                <Checkbox/>
                <p className='p-2'> {storeName} </p>
            </div>
            <div className='pl-10 flex flex-col'>
                {children}
            </div>

        </div>
    );
}
