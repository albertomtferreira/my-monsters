import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import CardSelector from './components/card-selector/card-selector.component';
import MESSAGES from './constants/constants';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [selectedMonster, setSelectedMonster] = useState("1");
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users)=>setMonsters(users))
    .catch((error)=>{
      throw(`${MESSAGES.ERROR_MESSAGE}`,error)
    })
  },[]);

  useEffect(()=>{
    const newFilteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])
  
  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  const handleChange = (event) => {
    setSelectedMonster(event.target.value)
  }


  return[
    <div key={'AppCaller'} className="App">
        <h1 className='app-title'>Monsters</h1>
        <div className='search-select-container'>
          <SearchBox
            className='monsters-search-box'
            onChangeHandler={onSearchChange}
            placeholder={MESSAGES.MESSAGE_SEARCHBOX}
          />
          <CardSelector
            className='card-selector-drop'
            onChangeHandler={handleChange}
          />
        </div>
        <CardList 
          monsters={filteredMonsters}
          selectedMonster={selectedMonster}
        />
      </div>
  ]
}

export default App;