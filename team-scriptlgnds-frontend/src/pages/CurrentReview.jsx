import React from 'react'
import NavBar2 from '../components/Games-Page-Nav'

const CurrentReview = () => {
  return (
    <div>
      <NavBar2 />
      <div className="view-review">
        <h3>Game Title: Call Of Duty</h3>
        <p>Game Image?</p>
        <p>Review Body:
            This game lags and sucks!
        </p>
        
        <button className='btn'>Update</button>
        <button className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default CurrentReview
