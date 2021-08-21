import { ClickTracker } from "./components/ClickTracker/ClickTracker";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//import './styles/styles.scss'

 function App() {
  return (
    <>
      <NavBar/>
      <hr/>
      <ItemListContainer greeting="Aqui existira el listado de productos"/>
    </>
  );
}

export default App;