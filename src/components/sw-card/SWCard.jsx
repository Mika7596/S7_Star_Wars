import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function SWCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
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