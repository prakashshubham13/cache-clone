import React from 'react'
import ComponentsBar from './Pages/ComponentsBar';
import "./App.css";
import Header from './Pages/Header';
import SettingsBar from './Pages/SettingsBar';
import UiDropScreen from './Pages/UiDropScreen';
const Dashboard = () => {
return (
   <>
   <Header/>
   <div className='dashboard'>
   <ComponentsBar/>
   <SettingsBar/>
   <UiDropScreen/>
    </div>
   </>
  )
}

export default Dashboard