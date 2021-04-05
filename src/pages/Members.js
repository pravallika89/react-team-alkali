
import {useState,useEffect} from 'react';
import MemberCardComponent from '../components/MemberCard.js'
import {membersData} from '../data/membersData.js';
import { Link } from 'react-router-dom';

const MembersPage =()=>{
  const [members,setMembers]=useState([]);
  const[alert,setAlert]=useState(false);
  const[searchTerm,setSearchTerm]=useState('');

  useEffect(()=>{
    // setHeroes(heroData);
    const foundMembers=membersData.filter(md=>{
      return(
        md.firstName.toLowerCase().includes(searchTerm.toLowerCase()) +md.lastName.toLowerCase().includes(searchTerm.toLowerCase()) + md.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
    // console.log('These are my search Results:',searchResults);
    searchTerm===' ' ? setMembers(membersData) : setMembers(foundMembers);
    // setHeroes(heroData);
  },[alert,searchTerm]);
  const updateFeatured=(memberId)=>{
    //first find the hero from heroData by hero Id
    let foundMember=membersData.find(member=>member.id===+memberId);
    //updated foundHero.featured to be opposite of its current value
    foundMember.featured=!foundMember.featured;
    
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },2000)
    console.log(foundMember);

  }
  const handleChange=(event)=>{
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  return (
    <div id='members'>
     <div className='row text-center mt-3' >
        <div className='col'>
          <h2>View our Members</h2> 
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='form-group'>
            <input type='text' className='form-control'
            id='hero-search'
            placeholder='Search for a Member'
            value={searchTerm}
            onChange={handleChange}></input>
          </div>
        </div>
      </div>
      {/* Alert users */}
      <div className='row'>
        <div className='col'>
          {alert ? (
            <div class='alert alert-success' role='alert'>
              A simple success alert—check it out!
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className='row'>
        {members.map((member)=>{
          return(
            <div className='col-sm-12 col-md-3' key={member.id} >
              <MemberCardComponent 
              member={member}
              updateFeatured={updateFeatured}
              />
            </div>
          )
        })}

      </div>
   
   
    </div>
  )
}

export default Members;