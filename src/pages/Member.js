
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {membersData} from '../data/membersData.js';
import { FaStar, FaRegStar } from 'react-icons/fa';
import MemberCardComponent from '../components/MemberCard.js';
import '../App.css';
const MemberPage=()=>{
  let {memberId}=useParams();
  const [member,setMember]=useState({
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    linkedIn: '',
    github: '',
    bio: '',
    profile_img: '',
    languages: [],
    featured: true,
  });
  

  useEffect(()=>{
    let foundMember=membersData.find(m=>m.id===+memberId);
    setMember(foundMember);
    
  },[member,memberId]);

 
  return(
    <div id='member'>


    <div className='row mt-4'>
      <div className='col'>
        {/* //single page member */}
        <div className="card" >
          <div className='row no-gutters'>
            <div className='col-md-4 th-img-container'>
               <img src={member.profile_img} alt={member.firstName}/>
               {/* <div className='th-member-img' style={{background:`url(${member.profile_img})`}}></div> */}
            </div>
            <div className='col-md-8 th-card-body'>
              <div className='card-body'>
               
                <div className='th-card-header d-flex justify-content-between'>

                  <span>
                    <a href="javascript:void(0)"
                    >{member.featured ? <FaStar style={{color:'orange'}} /> : <FaRegStar />} </a>
                  </span>

                  <span>
                    {member.role}
                  </span>

                </div>
                {/* member name */}
                
                <div className='th-card-name my-3'>
                  <h2>
                    <span>{member.firstName} {member.lastName} </span>
                  </h2>
                </div>

                {/* member details */}
                <div className='th-card-details'>

                  <div className="my-2">
                    <strong>Email: </strong>
                    {member.email}
                  </div>
                  <div className="my-2">
                    <a 
                      href={member.linkedIn}
                      className='card-link'
                      target='_blank'
                      rel='noreferrer noopener'> 
                      LinkedIn
                    </a>

                    <a 
                      href={member.github}
                      className='card-link'
                      target='_blank'
                      rel='noreferrer noopener'> 
                      Github
                    </a>
                  </div>
                  

                  <div className='detail'>
                  <h5 className='text-primary'>Languages</h5>
                  <p className='ml-5'>
                    {member.languages ?.map((language,i)=>{
                    return(
                      <span className="badge badge-pill badge-success" key={i}>
                        {language}
                        </span>
                    )
                  })}</p>
                  </div>

                  <div className='detail'>
                    <h5 className='text-primary'>About Me</h5>
                      <p className='ml-5'>{member.bio}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
        {membersData.map((member)=>{
          return(
            <div className='col-sm-12 col-md-3' key={member.id} >
              <MemberCardComponent 
              member={member}
              // updateFeatured={updateFeatured}
              />
            </div>
          )
        })}

      </div>
   </div>
  ) 
};

export default MemberPage;