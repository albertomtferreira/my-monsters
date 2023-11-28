import Card from "../card/card.component";
import './card-list.style.css';

const CardList = ({monsters}) =>{
  return[
    <div key={'CardListComponent'} className='card-list'>
      {monsters.map((monster)=>{
        return(
          <Card monster={monster}/>
        )
      })}
    </div>
  ]
}

export default CardList;