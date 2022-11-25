
import React from 'react';

function Checkbox({onChangeEvent}) {
    return (
        <div className='p-3'>
            <input type="checkbox" name='checkbox' onChange={()=>onChangeEvent()} />
        </div>
    );
}

export default Checkbox;