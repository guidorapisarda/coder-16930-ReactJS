import { ClickTracker } from "./components/ClickTracker/ClickTracker";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
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
            <ItemListContainer/>
          </Route>
          <Route exact path="/products">
            <hr/>
            <ItemListContainer/>
            <hr/>
          </Route>
          <Route exact path="/products/:catId">
            
            <hr/>
            <ItemListContainer/>
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