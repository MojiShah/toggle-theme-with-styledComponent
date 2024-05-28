import React, { useState } from 'react';
import './Switch.css';

function Swicth(props) {

    const [checked , setChecked] = useState(false);

    const switchHandler = () => {
        setChecked(!checked);
        props.toggleTheme();
    };

    return (
        <label className="toggle-switch">
            <input type="checkbox" value={checked} onChange={switchHandler}/>
            <span className='switch' />
        </label>
    )
}

export default Swicth;