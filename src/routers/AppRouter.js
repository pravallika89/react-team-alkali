import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/Home';
import MembersPage from '../pages/Members'
import MemberPage from '../pages/Member'
import AppRouter from './routers/AppRouter';
import Navbar from '../components/Navbar';
import './App.css';
const AppRouter=()=>{
  return(
    <div>
      <Navbar />
      <div className="container">
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/members' exact component={MembersPage}></Route>
        <Route path='/member/:memberId' exact component={MemberPage}></Route>

      </Switch>

      </div>
    </div>
  )
}
export default AppRouter;