import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from './services/allAPI';


function Add({setVideoUploadStatus}) {
    const [show, setShow] = useState(false);
    // state to store video details
    const [video, setVideo] = useState({
        caption: "",
        imageUrl: "",
        embedLink: ""
    })
    console.log(video);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbedLink = (e) => {
        const text = e.target.value
        // console.log(text);
        if (text.startsWith('https://youtu.be/')) {
            const link = `https://www.youtube.com/embed/${text.slice(17, 28)}`
            setVideo({ ...video, embedLink: link })

        }
        else {
            const link = `https://www.youtube.com/embed/${text.slice(-11)}`
            setVideo({ ...video, embedLink: link })
        }
    }


    // function to upload the video  details
    const handleUpload = async () => {
        const { caption, imageUrl, embedLink } = video

        if (!caption || !imageUrl || !embedLink) {
            toast.info('Please fill the form completely')
        }
        else {
            const response = await uploadVideoApi(video)
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                toast.success('Video Uploaded Successfully')
                setVideoUploadStatus(response.data)
                setVideo({
                    caption: "",
                    imageUrl: "",
                    embedLink: ""
                })
                handleClose()
            }
            else {
                console.log(response);
                toast.error('Something went wrong')
            }

        }
    }

    return (
        <>
            <div>
                <h6>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-2' /></h6>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-3 text-primary' />Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the folowwing details</p>
                    <form className='mt-3 border p-3 rounded'>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter Video Caption' className='form-control' onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter Image URL' className='form-control' onChange={(e) => setVideo({ ...video, imageUrl: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Enter Youtube Video Link' className='form-control' onChange={(e) => getEmbedLink(e)} />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <ToastContainer theme='success' position='top-center' autoClose={3000} /> */}
        </>
    )
}

export default Add