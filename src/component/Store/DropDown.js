import React, { useState } from 'react';
import '../CSS/custom.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function DropDown({ categories, list1, list2, list3, list4 }) {
    const [ToggleUpDown, setToggleUpDown] = useState(false);

    const HandleChange = () => {
        if (ToggleUpDown) {
            setToggleUpDown(false)
        } else { setToggleUpDown(true) }
    }

    return (
        <>
            <div onClick={HandleChange} className='drop-down-content'>
                <div className="drop-down">
                    <h4>categories</h4>
                    <p>{categories}</p>
                </div>
                <div className="toggle-icon">
                    {ToggleUpDown ? <ExpandMoreIcon className='up-icon' /> : <ExpandMoreIcon className='down-icon'/>}
                </div>
            </div>
            {ToggleUpDown ? (
                <ul className='toggle-list'>
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                    <li>{list4}</li>
                </ul>
            ) : ' '}

        </>

    )
}

export default DropDown
