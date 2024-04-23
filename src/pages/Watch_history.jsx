import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getAllVideoHistoryApi } from '../components/services/allAPI'




function Watch_history() {
  const [videoHistory, setVideoHistory] = useState([])
  const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  // function to get all videos from backend
  const getAllVideo = async () => {
    const response = await getAllVideoHistoryApi()
    setVideoHistory(response.data)
  }

  // function to delete a particular video
  const  handleDelete=async(id)=>{
    const response=await deleteVideoHistoryApi(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }


  console.log(videoHistory);

  useEffect(() => {
    getAllVideo()
    setDeleteVideoStatus(false)
  }, [deleteVideoStatus])

  return (
    <>
      <div className="d-flex align-items-center mx-3 mb-5 mt-4">
        <h5>Watch History</h5>
        <Link to={'/home'} className='ms-auto' style={{ textDecoration: 'none' }}>
          <h6 ><FontAwesomeIcon className='me-2' icon={faArrowLeft} /><span id='back'>Back to Home </span><FontAwesomeIcon icon={faHouse} /></h6>
        </Link>
      </div>

      <div className="row mx-4 mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-4" style={{ overflowX: 'auto' }}>
          {videoHistory?.length >0 ?
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>CAPTION</th>
                  <th>URL</th>
                  <th>TIMESTAMP</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {videoHistory?.map((item, index) => (<tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(item?.id)} className='btn btn-outline-danger' /></td>
                </tr>))}
              </tbody>
            </table> :
            <p className='text-primary mt-5 fs-5'><i>Watch history is clean...</i></p>
          }

        </div>
        <div className="col-md-1"></div>

      </div>
    </>
  )
}

export default Watch_history