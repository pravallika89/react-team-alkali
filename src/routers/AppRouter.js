import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/Home';
import MembersPage from '../pages/Members'
import MemberPage from '../pages/Member'
import AddMemberPage from '../pages/AddMember';
import Navbar from '../components/Navbar';

const AppRouter=()=>{
  return(
    <div>
      <Navbar />
      <div className="container">
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/members' exact component={MembersPage}></Route>
        <Route path='/member/:memberId' exact component={MemberPage}></Route>
        <Route path='/addmember' exact component={AddMemberPage}></Route>

      </Switch>

      </div>
    </div>
  )
}
export default AppRouter;