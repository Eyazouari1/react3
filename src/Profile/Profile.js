import React from 'react'
import propTypes from 'prop-types'
const Profile = (props) => {
 console.log(props)
  return (
    <div>
      {props.children}
      <span className='name' style={{marginTop:'-100px' , marginLeft:'60px'}}>
      <h3><span><h2>name:</h2></span> {props.test.fullname}</h3>
      <p><span><h2>bio:</h2></span>{props.test.bio}</p>
      <p><span><h2>profession:</h2></span>{props.test.profession}</p>
      <button style ={{backgroundColor:'blue' , color: 'white' , width: '150px', height:'40px', borderRadius:'10px'}} onClick={()=>props.handleName(props.test.fullname)} >Info</button>
      </span>
    </div>
  )
}
Profile.defaultProps={
  fullname:'.....'  ,
  bio:'............' ,
profession:'.......'}
Profile.propTypes={
  fullname:propTypes.string,
  bio:propTypes.string,
  profession:propTypes.string
}

export default Profile
