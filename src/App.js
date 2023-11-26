import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import MESSAGES from './constants/constants';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users)=>this.setState(()=>{
        return {monsters: users}
        })
      )
      .catch((error)=>{
        throw(`${MESSAGES.ERROR_MESSAGE}`,error)
      })
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return{searchField}
    })
  }

  render(){
    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const filteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    return [
      <div key={'AppCaller'} className="App">
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder={MESSAGES.MESSAGE_SEARCHBOX}
        />
        <CardList 
          monsters={filteredMonsters}
        />
      </div>
      
    ];
    
  }
}

export default App;