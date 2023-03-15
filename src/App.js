import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Tournaments from './pages/tournaments';
import Location from './pages/location';
import Teams from './pages/teams';
import Role from './pages/roles';
import Users from './pages/users';
import Games from './pages/games';
import Addrole from './component/role/addrole';
import Addtournament from './component/tournament/addtournament';
import AddLocation from './component/location/addlocation';
import Addteam from './component/teams/addteam';
import Adduser from './component/users/adduser';
import Layout from "./Layout/index";
import Tournamentname from "./component/tournament/tournamentname";
import constants from "./utils/constants.json";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
      <Route path={constants.dashboard} element={<Dashboard/>}/>
      <Route path={constants.tournaments} element={<Tournaments/>}/>
      <Route path={constants.addtournament} element={<Addtournament/>}/>
      <Route path={constants.tournamentname} element={<Tournamentname/>}/>
      <Route path={constants.games} element={<Games/>}/>
      <Route path={constants.location} element={<Location/>}/>
      <Route path={constants.addlocation} element={<AddLocation/>}/>
      <Route path={constants.teams} element={<Teams/>}/>
      <Route path={constants.addteam} element={<Addteam/>}/>
      <Route path={constants.roles} element={<Role/>}/>
      <Route path={constants.addrole} element={<Addrole/>}/>
      <Route path={constants.users} element={<Users/>}/>
      <Route path={constants.adduser} element={<Adduser/>}/>
      </Routes>
      </Layout>
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
