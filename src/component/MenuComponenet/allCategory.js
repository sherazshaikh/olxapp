import React, {useState} from 'react'
import './AllCategory.css'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";


const AllCategory = ()=>{

    const [ToggleManu, setToggleManu] = useState(false);

    const MenuToggle = () => {
      if (ToggleManu) {
        setToggleManu(false);
      } else {
        setToggleManu(true);
      }
    };

return(
    <div className="All_Category">
        <div className='div' onClick={MenuToggle} >All Category
        <span >
          {ToggleManu ? (
             <ArrowDropUpIcon
             fontSize="large"
             color="action"
             onClick={MenuToggle}
             className="DropDown"
           /> 
          ) : (
            <ArrowDropDownIcon
            fontSize="large"
            color="action"
            onClick={MenuToggle}
            className="DropDown"
          /> 
           
          )}
        </span>
        </div>
      
    </div>
)


}

export default AllCategory;