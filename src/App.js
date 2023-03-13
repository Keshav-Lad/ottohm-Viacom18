import './App.css';
import Sidebar from './component/common/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexDashboard from './pages/Indexdashboard';
import Navbar from './component/common/navbar';
import IndexTournaments from './pages/IndexTournaments';
import IndexGames from './pages/IndexGames';
import IndexLocation from './pages/Indexlocation';
import IndexTeams from './pages/IndexTeams';
import IndexRoles from './pages/Indexroles';
import IndexUsers from './pages/IndexUsers';


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<IndexDashboard/>}/>
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
