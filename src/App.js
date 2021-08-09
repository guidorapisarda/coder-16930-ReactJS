import { ItemListContainer } from "./components/container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

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