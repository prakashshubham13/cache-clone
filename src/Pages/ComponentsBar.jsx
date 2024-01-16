import React from 'react'
import '../App.css';
import { useSelector } from 'react-redux';

const ComponentsBar = () => {
  const logicList = useSelector((state)=>state.cachet.logicList);
  return (
    <div className='componet_bar'>
      <div className='componet_bar_header'>
      <h3 className='heading'>Logic Builder</h3>
      </div>
      <div className='search'><input placeholder='Search'/></div>
      <div className='componet_bar_scroll_section'>
             {logicList.map((data)=><div className='component_icon'>{data}</div>)}
      </div>
      {/*<div className='preview_btn'>Preview</div>*/}
    </div>
  )
}

export default ComponentsBar
