import {useState} from 'react';
import {membersData} from '../data/membersData';

const AddMemberPage=()=>{

  const [firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[role,setRole]=useState('');
  const[email,setEmail]=useState('');
  const[linkedIn,setLinkedIn]=useState('');
  const[github,setGithub]=useState('');
  const[bio,setBio]=useState('');
  const[profile_img,setProfile_img]=useState('');
  const[languages,setLanguages]=useState('');
  
  const [members,setMembers]=useState(membersData);
  

  // Working on it
  
  const addNewMember = (member) => {
    console.log(members);
    
    setMembers([...members,member]);
  
   
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(`My name is :${firstName} ${lastName} and role is ${role}`);
    let newMember={
      firstName: firstName,
        lastName:lastName,
        role: role,
        email:email,
        linkedIn:linkedIn,
        github:github,
        bio:bio,
        profile_img:profile_img,
        languages:languages,
        // featured: false,
    };
    // console.log(newMember);
    addNewMember(newMember);
    console.log(addNewMember);
    
  };

  const clearForm=()=>{
    setFirstName('');
    setLastName('');
    setRole('');
    setEmail('');
    setLinkedIn('');
    setGithub('');
    setBio('');
    setProfile_img('');
    setLanguages('')
  }

 
  return(
    <div className="row mb-5">
    <div className='col-6 offset-3'>
      <form action='submit' id='member-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text'
          className='form-control'
          id='firstName'
          value={firstName}
          onChange={(event)=>
            {setFirstName(event.target.value)}}
          
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text'
          className='form-control'
          id='lastName'
          value={lastName}
          onChange={(event)=>
            {setLastName(event.target.value)}}
          
          />
        </div>

        <div className='form-group'>
          <label htmlFor="role"> Role</label>
            <input 
            type='text' 
            className='form-control'
            id='role'
            value={role}
            onChange={(event)=>{
              setRole(event.target.value)
            }
            }
            />
        </div>
        <div className="row">
          <div className='form-group col'>
            <label htmlFor="email"> Email</label>
              <input 
              type='text' 
              className='form-control'
              id='email'
              value={email}
              onChange={(event)=>{
                setEmail(event.target.value)
              }
              }
              />
          </div>
          <div className='form-group col'>
            <label htmlFor="linkedIn"> LinkedIn</label>
              <input 
              type='text' 
              className='form-control'
              id='linkedIn'
              value={linkedIn}
              onChange={(event)=>{
                setLinkedIn(event.target.value)
              }}
              />
          </div>
        </div>
        <div className="row">
          <div className='form-group col'>
            <label htmlFor="github"> Github</label>
              <input 
              type='text' 
              className='form-control'
              id='github'
              value={github}
              onChange={(event)=>{
                setGithub(event.target.value)
              }}
              />
          </div>
          <div className='form-group col'>
            <label htmlFor="bio"> Bio</label>
              <input 
              type='text' 
              className='form-control'
              id='bio'
              value={bio}
              onChange={(event)=>{
                setBio(event.target.value)
              }}
              />
          </div>
        </div>
        

        <div className="row">

          <div className='form-group col'>
            <label htmlFor="profile_img"> Image link</label>
              <input 
              type='text' 
              className='form-control'
              id='profile_img'
              value={profile_img}
              onChange={(event)=>{
                setProfile_img(event.target.value)
              }}
              />
          </div>

          <div className='form-group col'>
            <label htmlFor="languages"> Languages</label>
              <input 
              type='text' 
              className='form-control'
              id='languages'
              value={languages}
              onChange={(event)=>{
                setLanguages(event.target.value)
              }}
              />
          </div>

        </div>

        <div className='row'>
            <div className='col'>
              <button className='btn btn-primary btn-block'>Save Member</button>
            </div>
            {/* <div className='col'>
              <button className='btn btn-warning btn-block' onClick={clearForm}>
                Cancel
              </button>
            </div> */}
          </div>
      </form>
      
    </div>
  </div>
  )
};

export default AddMemberPage;