import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'




function Home() {
  
  const[videoUploadStatus,setVideoUploadStatus]=useState({})
  const[dragOutVideoStatus,setVideoDragOutStatus]=useState(false)
  return (
    <>
      <div className='my-5 container d-flex'>
        <Add  setVideoUploadStatus={setVideoUploadStatus}/>
      <Link to={'/watch-history'}style={{textDecoration:'none'}} className='ms-auto'> <h6 ><span id='wh'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className='ms-3' /></h6></Link>

      </div>

      {/* Next section */}
      <div className="row mt-5 p-4">
        <div className="col-md-9">
          <h5>All Videos</h5>
          <View videoUploadStatus={videoUploadStatus} setVideoDragOutStatus={setVideoDragOutStatus}/>
        </div>
        <div className="col-md-3">
          <Category dragOutVideoStatus={dragOutVideoStatus} setVideoDragOutStatus={setVideoDragOutStatus}/>
        </div>
      </div>
    </>

  )
}

export default Home