import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Tops from './Tops';
import Bottoms from './Bottoms';
import ItemForm from './ItemForm';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/tops'>
          <Tops />
        </Route>
        <Route exact path='/bottoms'>
          <Bottoms />
        </Route>
        <Route exact path='/add'>
          <ItemForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
