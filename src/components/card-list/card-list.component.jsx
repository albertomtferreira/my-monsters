import { Component } from "react";

class CardList extends Component {
  render(){
    const {monsters} = this.props;
    return[
      <div key={'CardListComponent'}>
          {monsters.map((monster)=>(
            <h1 key={monster.id && monster.name}>{monster.name}</h1>
          ))}
      </div>
    ]
  }
}

export default CardList;