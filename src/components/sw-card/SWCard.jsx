import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { ActorsContext } from '../../contexts/actors-card.context';

import { DisplayCastContext } from '../../contexts/display-actors.context';


function SWCard(props) {
    const {fetchActors} = useContext(ActorsContext);
    const {actorsAvailable, setActorsAvailable} = useContext(DisplayCastContext)
    const cardSelected = (id) =>{
        fetchActors(id);
        setActorsAvailable(true)
        
    }

  return (
    <Card style={{ width: '17rem', backgroundColor: "black", color: "white", borderColor: "white"}} className="movie-card">
      <Card.Img variant="top" src={props.src} style={{height: "300px"}} className='movie-poster rounded'/>
      <Card.Body className='text-center'>
        <Card.Title>{props.content}</Card.Title>
        <Card.Text>
          {props.date}
        </Card.Text>
        {props.button && <Button variant="warning" onClick = {() => cardSelected(props.id)}>Read More</Button>}
      </Card.Body>
    </Card>
  )
}

export default SWCard