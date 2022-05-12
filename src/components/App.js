// all imports required in App
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import Home from './Home';
import All from './All';
import Outerwear from './Outerwear';
import Tops from './Tops';
import Bottoms from './Bottoms';
import Accessories from './Accessories';
import Favorites from './Favorites';
import ItemForm from './ItemForm';
import Summer from './Summer';
import ClipLoader from "react-spinners/ClipLoader";
import { PropagateLoader } from 'react-spinners';


function App() {
  // set state needed 
  const [clothes, setClothes] = useState([])
  const [searched, setSearched] = useState('')
  const [loading, setLoading] = useState(false)
  const [updatePage, setUpdatePage] = useState(false)

  // function to get initial fetch of data
  function getFetch() {
    fetch(`http://localhost:3000/clothing`)
    .then(res => res.json())
    .then(data => setClothes(data))
  }

  // use effect to call fetch function on page load
  useEffect(() => {
    getFetch()
  },[updatePage])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  },[clothes])

  // handles search through data and resets state to searched word
  function handleSearch(e) {
    setSearched(e)
  }

  // filter through all objects that match searched state
  const clothesToDisplay = clothes.filter((obj) => 
  obj.name.toLowerCase().includes(searched) || obj.brand.toLowerCase().includes(searched) || obj.category.toLowerCase().includes(searched)  ? true : false)

  return (
      <div>
        {
          loading ? 
          <div className='App-load' >
            <PropagateLoader />
          </div>
          :
      <div className='App'>
      <NavBar handleSearch={handleSearch}/>
      <Switch>
        <Route exact path='/'>
          <Home clothes={clothesToDisplay}/>
        </Route>
        <Route exact path='/all'>
          <All clothes={clothesToDisplay} searched={searched} setClothes={setClothes}/>
        </Route>
        <Route exact path='/outerwear'>
          <Outerwear clothes={clothesToDisplay} searched={searched} setClothes={setClothes}/>
        </Route>
        <Route exact path='/tops'>
          <Tops clothes={clothesToDisplay} searched={searched} setClothes={setClothes} />
        </Route>
        <Route exact path='/bottoms'>
          <Bottoms clothes={clothesToDisplay} searched={searched} setClothes={setClothes} />
        </Route>
        <Route exact path='/accessories'>
          <Accessories clothes={clothesToDisplay} searched={searched} setClothes={setClothes} />
        </Route>
        <Route exact path='/summer'>
          <Summer clothes={clothesToDisplay} setClothes={setClothes} />
        </Route>
        <Route exact path='/add'>
          <ItemForm setUpdatePage={setUpdatePage} />
        </Route>
        <Route exact path='/favorites' >
          <Favorites clothes={clothesToDisplay} search={searched} setClothes={setClothes} />
        </Route>
      </Switch>
      </div>
      }
    </div>
  )
}

export default App;
