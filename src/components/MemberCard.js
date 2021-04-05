import { Link } from 'react-router-dom';

import { FaStar, FaRegStar } from 'react-icons/fa';
import '../App.css'

const MemberCardComponent=({member,updateFeatured})=>{
  return(
    <div>
 <div className='card mb-3'>
    {/* header */}
    {/* <div className='card-header text-center'>{member.role}</div> */}
    {/* image */}
    {/* <div className='th-member-img' style={{background:`url(${member.profile_img})`}}></div> */}
    <div className='th-card-bg-img' style={{backgroundImage:`url(${member.profile_img})`}}></div>
    {/* <img
      src={member.profile_img}
      alt={member.lastName}
      className='card-img-top'
    /> */}
    {/* body */}
    <div className='card-body'>
    
      <h6 className='text-secondary'>"{member.firstName}"</h6>
      <div className='my-2'>
        <strong>Bio: </strong>
        {member.bio}
      </div>
      <div className='my-2'>
        <strong>Languages: </strong>
        {member.languages.map((language, i) => {
          return (
            <small key={i}>
              {language}
              {i === member.languages.length - 1 ? '' : ', '}
            </small>
          );
        })}
      </div>
      <div className='my-2 d-flex justify-content-between'>
        <Link to={`/members/${member.id}`} className='card-link'>
          View Details
        </Link>
        <a href='javascript:void(0)' className='card-link'
        onClick={()=>updateFeatured(member.id)}>
          {member.featured ? <FaStar /> : <FaRegStar />}
        </a>
      </div>
    </div>
    {/* links */}
  </div>

    </div>
  );
}
export default MemberCard;
