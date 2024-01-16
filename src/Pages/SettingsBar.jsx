import React,{useState,useEffect} from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addDragItem} from "../redux/cachetSlice";
import { BiSolidFileImport } from 'react-icons/bi';
import { MdOutlineDeleteForever } from 'react-icons/md';
const SettingsBar = () => {
  const dispatch = new useDispatch();
  const dragItem = useSelector((state)=>state.cachet.dragItem);
  const [on, toggleOn] = useState(false);
  return (
    <div className='setting_bar'>
    <div className='setting_bar_header'>
    <h3 className='heading'>Imports</h3>
    </div>
    <div className='search'><input placeholder='Search'/></div>
   {/*<div className='save_btn'>Save</div>*/}
   <div className='componet_bar_scroll_section'>
  <div className='switch-container'>
  <label>US Lane</label>
  <div className={`switch ${on ? 'switch-on' : ''} `} onClick={()=>toggleOn((prev)=>!prev)}>
  <div className={`switch-btn ${on ? 'switch-btn-on' : ''} `}></div>
 </div>
  </div>

  <div className='switch-container'>
  <label>US Lane</label>
  <div className={`switch ${on ? 'switch-on' : ''} `} onClick={()=>toggleOn((prev)=>!prev)}>
  <div className={`switch-btn ${on ? 'switch-btn-on' : ''} `}></div>
 </div>
  </div>


  <div className='switch-container'>
  <label>US Lane</label>
  <div className={`switch ${on ? 'switch-on' : ''} `} onClick={()=>toggleOn((prev)=>!prev)}>
  <div className={`switch-btn ${on ? 'switch-btn-on' : ''} `}></div>
 </div>
  </div>


  <div className='switch-container'>
  <label>US Lane</label>
  <div className={`switch ${on ? 'switch-on' : ''} `} onClick={()=>toggleOn((prev)=>!prev)}>
  <div className={`switch-btn ${on ? 'switch-btn-on' : ''} `}></div>
 </div>
  </div>
             
      </div>
   <div className='setting_form'>
   </div>
    </div>
  )
}

export default SettingsBar
