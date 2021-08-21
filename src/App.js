import { ClickTracker } from "./components/ClickTracker/ClickTracker";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
//import './styles/styles.scss'

 function App() {
  return (
    <>
      <NavBar/>
      <hr/>
      <ItemListContainer/>
      <ClickTracker/>
    </>
  );
}

export default App;