import React from 'react'
import { useLocation } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

const MovieDetail = () => {
  const location = useLocation();
  return (
    <div className="MovieContainer">
    <div className='container' style={{color:"whitesmoke"}}>
      <h1 style={{textAlign:'center'}}><u>{location.state.title}</u></h1>
      <h4 style={{textAlign:'right'}}>Release: {location.state.release}</h4>
      
      <div>
        <h6><StarFill color='gold'/> {location.state.vote_avg}/10</h6>
        <h6><strong>{location.state.vote_cnt}</strong> reviews</h6>
      </div>
      <h4 style={{marginTop:'50px'}}>{location.state.overview}</h4>
    </div>
    </div>
  )
}

export default MovieDetail