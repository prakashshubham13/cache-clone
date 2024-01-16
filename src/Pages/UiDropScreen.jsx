import React,{useState} from 'react'
import { ImBin } from 'react-icons/im';
import { IoIosAddCircle } from 'react-icons/io';
import { useSelector,useDispatch } from 'react-redux';
import {addDragItem,updateLaneAdd} from "../redux/cachetSlice";

const UiDropScreen = () => {
  const dispatch = new useDispatch();
  const logicSet = useSelector((state)=>state.cachet.logicSet);
  const dragItem = useSelector((state)=>state.cachet.dragItem);
  return (
    
    <div className='mainscreen'>
    
    <div className='uidropscreen' draggable onDragEnd={e=>{console.log("--",dragItem);dispatch(updateLaneAdd(dragItem));}}>
    
    
{false && <div class="Card">
  <div class="ribbon">
  <span class="ribbon__content">AVRl</span></div>
</div>}
    
      
      
    <div id="editScreen">

{true &&
  <>
  {logicSet.lane.map((data)=>
      <div className='select'>
    <h3 style={{position:"relative",left:"0",borderBottom:"0.05rem solid rgba(0,0,0,0.4)",color:"#354147"}}>Rule:1001</h3>
    
        From:<div><select  value={data[0]}>
    
      <option value="0">h</option>
      <option value="*">*</option>
      <option value="CA">CA</option>
      <option value="3">Nice!</option>
    </select>
    
    
     
    <select>
    <option selected value="0">Pure CSS Select</option>
    <option value="1">No Wrapper</option>
    <option value="2">No JS</option>
    <option value="3">Nice!</option>
    </select>
    
    
     
    <select>
    <option selected value="0">Pure CSS Select</option>
    <option value="1">No Wrapper</option>
    <option value="2">No JS</option>
    <option value="3">Nice!</option>
    </select>
    </div>
    To:
    
    <div>
    
    <select>
      <option selected value="0">Pure CSS Select</option>
      <option value="1">No Wrapper</option>
      <option value="2">No JS</option>
      <option value="3">Nice!</option>
    </select>
    
    
     
    <select>
    <option selected value="0">Pure CSS Select</option>
    <option value="1">No Wrapper</option>
    <option value="2">No JS</option>
    <option value="3">Nice!</option>
    </select>
    
    
     
    <select>
    <option selected value="0">Pure CSS Select</option>
    <option value="1">No Wrapper</option>
    <option value="2">No JS</option>
    <option value="3">Nice!</option>
    </select>
    </div>
  
    </div>
  
    
    )}
    
    <div style={{display:"flex",justifyContent:"flex-end", paddingRight:"1rem",paddingBottom:"1rem"}}>
    <div style={{  boxShadow: "0 0.4rem 1rem 0 rgba(177, 176, 176, 0.9)",borderRadius:"0rem 1rem 1rem 0",cursor:"pointer", background:"#14a1ff",color:"#fff",fontWeight:"600",padding:"0 0 0 0.4rem",display:"flex",alignItems:"center"}}>Add More<IoIosAddCircle style={{fontSize:"2.4rem",cursor:"pointer",color:"#fff",borderRadius:"0.4rem",transform:"translate(15%,0)"}}/></div>
    </div>
    </>
  }

{false &&
<div style={{display:"flex",alignItems:"center",flexDirection:"column",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",cursor:"pointer"}}>
No Lane Logic Added Yet
<div style={{background:"#14a1ff",color:"#fff",fontWeight:"600",borderRadius:"0rem 1rem 1rem 0",margin:"0.5rem 0",padding:"0 0 0 0.4rem",display:"flex",alignItems:"center"}}>Add<IoIosAddCircle style={{fontSize:"2.4rem",cursor:"pointer",color:"#fff",borderRadius:"0.4rem",transform:"translate(15%,0)"}}/></div>
</div>}

    </div>
    </div>
    </div>
     
    
  )
}

export default UiDropScreen
