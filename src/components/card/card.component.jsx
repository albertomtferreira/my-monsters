import { Component } from "react";

import './card.styles.css';

class Card extends Component{
  render(){
    const {name,id,username,email} = this.props.monster;
    return(
      <div className='card-container' key={id}>
              <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <div className='card-text'>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
              </div>
            </div>
    )
  }
}

export default Card;