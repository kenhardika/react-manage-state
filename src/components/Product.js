import React from 'react';
import Checkbox from './Checkbox';

export default function Product({data, onChange}) {
    return (
        <div className='flex flex-row gap-2 justify-start items-center'>
            <Checkbox onChange={(e)=> 
                onChange({ checked: e.target.checked })} 
                checked = {data.checked}
            />
            <img src={data.image} width={"80px"} alt="" />
            <div>
                {data.name}
            </div>
            <div>
                {data.price}
            </div>
        </div>
    );
}