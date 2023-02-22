import React from 'react'
import propTypes from 'prop-types'
const Profile = (props) => {
 console.log(props)
  return (
    <div className='profileDiv'> 
      
      <hr/>
      <div >
        {props.children}
      </div>
      <div >
        
          <h2 >name:</h2>
          <h4 > {props.test.fullname}</h4>
        
        
          <h2>bio:</h2>
          <h4 >{props.test.bio}</h4>
        
       
          <h2 >profession:</h2> 
          <h4 >{props.test.profession}</h4>
        
        <button style={{width:'150px',height:'35px',border:'none',borderRadius:'5px'}} >Info</button>
        <br></br>
      </div>
    </div>
  
  )
}
Profile.defaultProps={
  test:{
    
    fullname:'......',
    bio:'........',
    profession:'.......'

  }
 }
Profile.propTypes={
  fullname:propTypes.bool,
  bio:propTypes.string,
  profession:propTypes.string
}

export default Profile
