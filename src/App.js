import './App.css';
import Sidebar from './component/common/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexDashboard from './pages/Indexdashboard';
import IndexTournaments from './pages/IndexTournaments';
import IndexLocation from './pages/Indexlocation';
import IndexTeams from './pages/Indexteams';
import IndexRole from './pages/Indexroles';
import IndexUsers from './pages/Indexusers';
import IndexGames from './pages/Indexgames';
import Addrole from './component/pages/role/addrole';
import Navbar from './component/common/navbar';
import Addtournament from './component/pages/tournament/addtournament';
import AddLocation from './component/pages/location/addlocation'

import Addteam from './component/pages/teams/addteam';
import Adduser from './component/pages/users/adduser';
// import Tournamentname from './component/pages/tournament/tournamentname';
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<IndexDashboard/>}/>
      <Route path="/tournaments" element={<IndexTournaments/>}/>
      <Route path="/tournaments/createtournament" element={<Addtournament/>}/>
      <Route path="/games" element={<IndexGames/>}/>
      <Route path="/location" element={<IndexLocation/>}/>
      <Route path="/location/addlocation" element={<AddLocation/>}/>
      <Route path="/teams" element={<IndexTeams/>}/>
      <Route path='/teams/addteams' element={<Addteam/>}/>
      <Route path="/roles" element={<IndexRole/>}/>
      <Route path="/roles/AddRole" element={<Addrole/>}/>
      <Route path="/users" element={<IndexUsers/>}/>
      <Route path='/users/adduser' element={<Adduser/>}/>

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
