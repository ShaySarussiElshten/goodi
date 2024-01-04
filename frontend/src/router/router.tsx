import {
    Routes, Route, Outlet, Navigate,
  } from 'react-router-dom';
  import { PROFILE_ID, ROUTES } from '../constants';
  import Screens from '../screens';
  

  
  function Router() {
    return (
      <Routes>
        <Route path={ ROUTES.DICETHROWER } element={ <Screens.DiceThrowerScreen /> } />
        <Route path="*" element={ < Screens.DiceThrowerScreen /> } /> 
      </Routes>
    );
  }
  
  export default Router;