
import React from 'react';

function Checkbox({onChange, checked}) {

    return (
        <div className='p-3'>
            <input 
                type="checkbox" 
                name='checkbox' 
                checked ={checked} 
                onChange={(e)=>onChange(e)} />
        </div>
    );
}

export default Checkbox;