import { ClickTracker } from "./components/ClickTracker/ClickTracker";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {Home} from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//import './styles/styles.scss'

 function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/products/:catFilter">
            <hr/>
            <ItemListContainer/>
            <hr/>
          </Route>
          <Route exact path="/products">
            <hr/>
            <ItemListContainer/>
            <hr/>
          </Route>
          <Route exact path="/item/:id">
            <hr/>
            <ItemDetailContainer/>
            <hr/>
          </Route>
          <Route path="/clicktracker">
            <ClickTracker/>
          </Route>
          <Route path="/nosotros">
            <h2>Info sobre nosotros</h2>
          </Route>
          <Route path="/cart">
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;