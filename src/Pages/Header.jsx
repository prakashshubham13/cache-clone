import "../../src/App.css";
import { MdAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {toogleMode} from "../redux/cachetSlice";
const Header = () => {
  const dispatch = new useDispatch();
  const bnbMode = useSelector((state)=>state.cachet.bnbMode);
  console.log(bnbMode);
    return (
      <div className="header">
      <div className="headercontent"> 
     <h3><span>A</span>VRL Cachet</h3>
      <div className="header-title">
     <h3 style={{fontWeight:"600",fontSize:"1.2rem"}}>lb_3g_lennoxnfl_bnbpa</h3>
     {true && <div className="toggle">
      <div className={bnbMode && "toggle-active"} onClick={()=>dispatch(toogleMode(true))}>BNB</div>
      <div className={!bnbMode && "toggle-active"} onClick={()=>dispatch(toogleMode(false))}>PA</div>
      </div>}
      </div>
     <div className="headermenu">
      <button>Save to cloud</button>
      <button>Save as file</button>
<MdAccountCircle className="header-icon"/>
      </div>

      </div>
      {/* <div><h3>lb_3g_lennoxnfl_bnbpa_sp</h3>
      <div className="toggle">
      <div className="toggle-active">BNB</div>
      <div >PA</div>
      </div>
      </div>
      

    </div>
          </div>
      </div>
          */}
      </div>
     
    )
  }
export default Header;  