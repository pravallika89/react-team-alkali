import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/Home';
import MembersPage from '../pages/Members'
import MemberPage from '../pages/Member'
import AddMemberPage from '../pages/AddMember';
import Navbar from '../components/Navbar';
import {membersData} from '../data/membersData';
import {useState} from 'react';

const AppRouter=()=>{
  const [members,setMembers]=useState(membersData);
  const [firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[role,setRole]=useState('');
  const[email,setEmail]=useState('');
  const[linkedIn,setLinkedIn]=useState('');
  const[github,setGithub]=useState('');
  const[bio,setBio]=useState('');
  const[profile_img,setProfile_img]=useState('');
  const[languages,setLanguages]=useState('');
  return(
    <div>
      <Navbar />
      <div className="container">
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        {/* <Route path='/members' exact component={MembersPage}></Route> */}
        <Route path='/members/:memberId'  component={MemberPage}></Route>
        {/* <Route path='/addmember' exact component={AddMemberPage}  ></Route> */}
        <Route path='/addmember' render={(props) => <AddMemberPage {...props} 
          members={members} setMembers={setMembers}  
          firstName={firstName}setFirstName={setFirstName} 
          lastName={lastName} setLastName={setLastName} 
          role={role} setRole={setRole} 
          email={email} setEmail={setEmail}
          linkedIn={linkedIn} setLinkedIn={setLinkedIn}
          github={github} setGithub={setGithub}
          bio={bio} setBio={setBio} 
          languages ={languages} setLanguages={setLanguages}
          profile_img={profile_img} setProfile_img={setProfile_img}/>}/>
        <Route exact path='/members'  render={(props) => <MembersPage {...props} members={members} setMembers={setMembers} 
        />}/>

      </Switch>

      </div>
    </div>
  )
}
export default AppRouter;
