import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {membersData} from '../data/membersData.js';
// import { FaStar, FaRegStar } from 'react-icons/fa';
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
  

  const[alert,setAlert]=useState(false);

  useEffect(()=>{
    let foundMember=membersData.find(m=>m.id===+memberId);
    // console.log(foundHero);
    setMember(foundMember);
    
  },[member,memberId,alert]);

  const updateFeatured= (memId)=>{
    let foundMember=membersData.find(m=>m.id===+memId);
    foundMember.featured=!foundMember.featured
    
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },2000);
  };
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
                    onClick={()=>{updateFeatured(member.id)}}>{member.featured}</a>
                  </span>
                  <span>
                    {member.role}
                  </span>
                </div>
                {/* member name */}
                <div className='th-card-name my-3'>
                  <h2>
                    <span>{member.firstName}, </span>
                    <em>AKA {member.lastName}</em>
                  </h2>
                </div>
                {/* member details */}
                <div className='th-card-details'>

                <div className='detail'>
                  <h4 className='text-primary'>Bio</h4>
                  <p className='ml-5'>{member.bio}</p>
                  </div>

                 

                  <div className='detail'>
                  <h4 className='text-primary'>email</h4>
                  <p className='ml-5'>{member.email}</p>
                  </div>

                  <div className='detail'>
                  <h4 className='text-primary'>Languages</h4>
                  <p className='ml-5'>{member.languages ?.map((language,i)=>{
                    return(
                      <span key={i}>
                        {language}
                        {i === member.languages.length - 1 ? '' : ', '}
                        </span>
                    )
                  })}</p>
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
              updateFeatured={updateFeatured}
              />
            </div>
          )
        })}

      </div>
   </div>
  ) 
};

export default MemberPage;