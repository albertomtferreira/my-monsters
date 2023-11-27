import { Component } from "react";

import './card.styles.css';

class Card extends Component{
  render(){
    const {name,id,username,email} = this.props.monster;
    return(
      <div className='card-container' key={id}>
              <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set3&size=180x180`}
              />
              <div className='card-text'>
                <div className='inline-card'><h6 className='labels-card'>Name:</h6><h2>{name}</h2></div>
                <div className='inline-card'><h6 className='labels-card'>Username:</h6><h3>{username}</h3></div>
                <div className='inline-card'><h6 className='labels-card'>email:</h6><p>{email}</p></div>
              </div>
            </div>
    )
  }
}

export default Card;