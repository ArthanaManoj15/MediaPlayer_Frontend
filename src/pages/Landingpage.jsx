import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <div className='row p-3 my-5'>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5">
          <h4>Welcome to <span className='text-primary'>Media Player</span></h4>
          <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum accusamus ea sit adipisci nobis. Necessitatibus, saepe perspiciatis in vero iure quam soluta rem magni hic labore nemo molestiae delectus.</p>

          <Link to={'/home'}><button className='btn btn-primary mt-4'>Get Started</button></Link>

        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3 d-flex justify-content-center align-items-center">
          <img src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="" className='w-75' />
        </div>
      </div>


      <Row className='mb-md-5 p-2'>
        <h3 className='my-5 text-center'>Features</h3>
        <Col md={1}></Col>
        <Col md={3}>
          <Card style={{ width: '100%' }} className='p-4'>
            <Card.Img variant="top" src="https://i.gifer.com/origin/4d/4df0a6453ab542634821b4a8fd6b8fb0_w200.gif" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
          <Card style={{ width: '100%' }} className='p-4'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '100%' }} className='p-4'>
            <Card.Img variant="top" src="https://phoneky.co.uk/thumbs/screensavers/down/music/live4music_h6bwni57.gif" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
      <div className="row pt-0 pt-md-5 pb-5">
        <div className="col-md-1"></div>
        <div className="col-md-10 border p-5 rounded border-2" >
          <Row>
            <Col md={6} className='p-5'>
              <h4 className='text-primary simple' >Simple Fast & Powerful</h4>
              <p style={{ textAlign: 'justify' }}><span className='fs-5 simple' >Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus reiciendis autem. </p>
              <p style={{ textAlign: 'justify' }}><span className='fs-5 simple'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus reiciendis autem. </p>
              <p style={{ textAlign: 'justify' }}><span className='fs-5 simple'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus reiciendis autem. </p>
            </Col>
            <Col md={6}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rtOvBOTyX00?si=WDCWB0tJ--oI3f42" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>
        <div className="col-md-1"></div>
      </div>

    </>
  )
}

export default Landingpage