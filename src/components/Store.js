import React from 'react';
import Checkbox from './Checkbox';
import Product from './Product';

export default function Store({ data, onChangeProduct, onChangeStore }) {
    const checkAllCb = () => {
        
    }
    return (
        <div className='w-full h-auto bg-slate-300 flex flex-col items-center justify-center gap-2' >
            <div className='flex flex-row w-[700px] items-center'>
                <Checkbox 
                    checked = {checkAllCb()} 
                    onChange = {(e)=>onChangeStore({checked: e.target.checked})}
                />
                <img src={data.logo} className="rounded-full" width="50px" alt="store-logo" />
                <div className='flex flex-col'>
                    <p className='p-2 text-xl'> {data.store} </p>
                    <p className='pl-2 text-sm'> {data.city} </p>
                </div>
            </div>
            <div className='pl-10 w-[700px] flex flex-col'>
                {
                    data.items.map((item, index) => 
                        <Product 
                            data={item} 
                            key={index}
                            onChange = { (data) => onChangeProduct(index, data)}
                            />
                    )
                }
            </div>

        </div>
    );
}
