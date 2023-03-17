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
import Login from './pages/login';
import constants from "./utils/constants.json";
import { Fragment } from 'react';
import PrivateRoute from './utils/privateroutes';
import { Provider } from 'react-redux';
import store from "./utils/reducer/store/sidebarstore"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path={constants.login} element={<Login />} />
      <Route exact element={<PrivateRoute/>}>
        <Route path={constants.home}
          element={
            <Fragment>
                <Layout>
                <Routes>
                <Route path={constants.dashboard} element={<Dashboard />} />
                <Route path={constants.tournaments} element={<Tournaments />} />
                <Route path={constants.addtournament} element={<Addtournament />} />
                <Route path={constants.tournamentname} element={<Tournamentname />} />
                <Route path={constants.games} element={<Games />} />
                <Route path={constants.location} element={<Location />} />
                <Route path={constants.addlocation} element={<AddLocation />} />
                <Route path={constants.teams} element={<Teams />} />
                <Route path={constants.addteam} element={<Addteam />} />
                <Route path={constants.roles} element={<Role />} />
                <Route path={constants.addrole} element={<Addrole />} />
                <Route path={constants.users} element={<Users />} />
                <Route path={constants.adduser} element={<Adduser />} />
                </Routes>
                </Layout>
            </Fragment>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter> 
  </Provider>     
  );
}

export default App;
