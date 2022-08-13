import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  //Use Effect to get data just once []
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> {
      setMonsters(users)
    })
  },[]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  // components re renders when state change or when props change
  const filterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchValue))

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler= {onSearchChange} placeholder = 'search monsters' className='monster-search-box'/>
      
      <CardList data={filterMonsters}/>
    </div>
  );
}

export default App;
