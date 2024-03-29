import React from 'react'
import CustomInput from './../Custom Component/CustomInput';
import {useSelector, useDispatch} from 'react-redux'
import CustomTextarea from '../Custom Component/CustomTextarea';
import CustomHeader from '../Custom Component/CustomHeader';
const PreviewScreen = () => {
  const dropData = useSelector(state => state.dropData)
  return (
    <div className='preview_screen_container' style={{margin:'0',padding:'0',display:'flex',flexDirection:'column'}}>
    {dropData?.length >0 && dropData?.map((data,i)=>
        <div key={i+data} style={{}}>
          {data.type === 'input' && <CustomInput css={data.css}/> }
          {data.type === 'textarea' && <CustomTextarea css={data.css}/> }
          {data.type === 'heading' && <CustomHeader text={data.text} css={data.css}/> }
        </div>
      )}
    </div>
  )
}

export default PreviewScreen
