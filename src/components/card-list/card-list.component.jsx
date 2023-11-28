import Card from "../card/card.component";
import './card-list.style.css';

const CardList = ({monsters, selectedMonster}) =>{
  return[
    <div key={'CardListComponent'} className='card-list'>
      {monsters.map((monster)=>{
        return(
          <Card monster={monster} selectedMonster={selectedMonster}/>
        )
      })}
    </div>
  ]
}

export default CardList;