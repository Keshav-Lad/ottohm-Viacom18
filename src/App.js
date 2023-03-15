import './App.css';
import Sidebar from './component/common/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Tournaments from './pages/tournaments';
import Location from './pages/location';
import Teams from './pages/teams';
import Role from './pages/roles';
import Users from './pages/users';
import Games from './pages/games';
import Addrole from './component/pages/role/addrole';
import Navbar from './component/common/navbar';
import Addtournament from './component/pages/tournament/addtournament';
import AddLocation from './component/pages/location/addlocation'

import Addteam from './component/pages/teams/addteam';
import Adduser from './component/pages/users/adduser';
import Tournamentname from './component/pages/tournament/tournamentname';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/tournaments" element={<Tournaments/>}/>
      <Route path="/tournaments/createtournament" element={<Addtournament/>}/>
      <Route path="/tournaments/tournamentname" element={<Tournamentname/>}/>
      <Route path="/games" element={<Games/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path='/location/addlocation' element={<AddLocation/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path='/teams/addteams' element={<Addteam/>}/>
      <Route path="/roles" element={<Role/>}/>
      <Route path="/roles/AddRole" element={<Addrole/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/adduser" element={<Adduser/>}/>

      {/* <Route path="/login" element={<Login />}/>        
      <Route exact element={<PrivateRoute/>}>          
      <Route path="/*" element={
        <Fragment>                
          <Sidebar>                  
          <Navbar/>                  
          <Routes>                    
          <Route path="/" element={<IndexDashboard/>} />
          </Routes>                
          </Sidebar>              
          </Fragment>
            }/>       
      </Route> */}
      </Routes>
      </Sidebar>
    </BrowserRouter>    

    
    // <Addlocation/>
    // <Adduser/>
    // <Addrole/>
    // <Addteam/>
    // <Tournamentname/>
    // <Addtournament/>
    // <Role/>
  );
}

export default App;
