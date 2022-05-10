import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import Home from './Home';
import All from './All';
import Tops from './Tops';
import Bottoms from './Bottoms';
import Accessories from './Accessories';
import Favorites from './Favorites';
import ItemForm from './ItemForm';


function App() {
  const [clothes, setClothes] = useState([])
  const [searched, setSearched] = useState('')

  function getFetch() {
    fetch(`http://localhost:3000/clothing`)
    .then(res => res.json())
    .then(data => setClothes(data))
  }

  useEffect(() => {
    getFetch()
  },[])

  function handleSearch(e) {
    setSearched(e)
  }

  const clothesToDisplay = clothes.filter((obj) => 
  obj.name.toLowerCase().includes(searched) ? true : false)

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch}/>
      <Switch>
        <Route exact path='/'>
          <Home clothes={clothesToDisplay}/>
        </Route>
        <Route exact path='/all'>
          <All clothes={clothesToDisplay}/>
        </Route>
        <Route exact path='/tops'>
          <Tops clothes={clothesToDisplay} />
        </Route>
        <Route exact path='/bottoms'>
          <Bottoms clothes={clothesToDisplay} />
        </Route>
        <Route exact path='/accessories'>
          <Accessories clothes={clothesToDisplay} />
        </Route>
        <Route exact path='/add'>
          <ItemForm />
        </Route>
        <Route exact path='/favorites'>
          <Favorites clothes={clothesToDisplay} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
