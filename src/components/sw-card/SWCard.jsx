import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function SWCard(props) {
  return (
    <Card style={{ width: '17rem', backgroundColor: "black", color: "white", borderColor: "white"}} className="movie-card">
      <Card.Img variant="top" src={props.src} style={{height: "300px"}} className='movie-poster rounded'/>
      <Card.Body className='text-center'>
        <Card.Title>{props.content}</Card.Title>
        <Card.Text>
          {props.date}
        </Card.Text>
        <Button variant="warning">Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default SWCard