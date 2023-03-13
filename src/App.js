import './App.css';
import Sidebar from './component/common/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexDashboard from './pages/Indexdashboard';
import Navbar from './component/common/navbar';
import IndexTournaments from './pages/Indextournament';
import IndexGames from './pages/Indexgames';
import IndexLocation from './pages/Indexlocation';
import IndexTeams from './pages/Indexteams';
import IndexRoles from './pages/Indexroles';
import IndexUsers from './pages/Indexusers';
import Addlocation from './component/pages/location/addlocation';
import Adduser from './component/pages/users/adduser';
import Addrole from './component/pages/role/addrole';
import Addteam from './component/pages/teams/addteam';
import Tournamentname from './component/pages/tournament/tournamentname';
import Addtournament from './component/pages/tournament/addtournament';
import Role from './component/pages/role/role';


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Navbar></Navbar>
      <Routes>
      <Route path="/dashboard" element={<IndexDashboard/>}/>
      <Route path="/tournaments" element={<IndexTournaments/>}/>
      <Route path="/games" element={<IndexGames/>}/>
      <Route path="/location" element={<IndexLocation/>}/>
      <Route path="/teams" element={<IndexTeams/>}/>
      <Route path="/roles" element={<IndexRoles/>}/>
      <Route path="/users" element={<IndexUsers/>}/>

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
