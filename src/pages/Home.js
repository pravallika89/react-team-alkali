
import {  useState,useEffect } from 'react';
import {membersData} from '../data/membersData.js';
import { Link } from 'react-router-dom';
// import { FaStar, FaRegStar } from 'react-icons/fa';


const HomePage=()=>{
  const [members,setMembers] = useState([]);
  
  useEffect(() => {
    let featured = membersData.filter(member => member.featured);
    setMembers(featured);
  }, []);

 return(
    <div id='home-page' className='container text-center'>

      <div className='row text-center mt-3'>
        <div className='col'>
          <h2>We are Team Alkali!</h2>
        </div>

        <div className='detail'>
          <h4 className='text-primary'>About</h4>
          <p className='ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci atque rem. Quaerat dolorem earum dignissimos distinctio quidem vel amet natus? Ex corporis ea cumque nesciunt accusantium sapiente sunt quia!</p>
          <h4 className='text-secondary'>Featured Members</h4>
        </div>
      </div>

      <div className='row'>
        {members.map((member) => {
          return (
            <div className='col-md-6 offset-md-3' key={member.id}>
              
              <div className="card mb-3" > {/* card */}
               {/* Image */}
                <img
                  src={member.profile_img}
                  alt={member.lastName}
                  className='card-img-top rounded-circle'
                  />
                {/* Body */}
                <div className='card-body'>
                  <h4 className='card-title'>
                  {member.firstName +' '+ member.lastName}
                  </h4>
                  <h5 className='card-title'> {member.role}</h5>
                  <a 
                    href={member.email}
                    className='card-link'
                    target='_blank'
                    rel='noreferrer noopener'> 
                    Email
                  </a>

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

                  <div className='my-2'>
                    <strong>Languages: </strong>
                    {member.languages.map((language, i) => {
                    return (
                    <small className="badge badge-pill badge-success" key={i}>
                    {language}
                    {i === member.languages.length - 1 ? '' : ', '}
                    </small>
                    );
                    })}
                  </div>

                  <div className='my-2 d-flex justify-content-between'>
                    <Link to={`/members/${member.id}`} className='card-link'>
                    View Profile
                    </Link>
                    <a href='javascript:void(0)' className='card-link'>
                    {member.featured }
                    </a>
                  </div>
                     
                </div>  
              </div> {/* card */}
            </div>  
          );
        })}
    </div>


    </div>
 )
}

export default HomePage;