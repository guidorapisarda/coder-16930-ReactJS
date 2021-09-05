import { NavBar } from "./components/NavBar/NavBar";
//import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { UIContextProvider } from "./Context/UIContext";
import { Home } from "./components/Home/Home";
import { ClickTracker } from "./components/ClickTracker/ClickTracker";
function App() {
    return (
        <>
            <UIContextProvider>
                <CartProvider>
                    <Router>
                        <NavBar />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/products/:catFilter">
                                <hr />
                                <ItemListContainer />
                                <hr />
                            </Route>
                            <Route exact path="/products">
                                <hr />
                                <ItemListContainer />
                                <hr />
                            </Route>
                            <Route exact path="/item/:id">
                                <hr />
                                <ItemDetailContainer />
                                <hr />
                            </Route>
                            <Route path="/clicktracker">
                                <ClickTracker />
                            </Route>
                            <Route path="/nosotros">
                                <h2>Info sobre nosotros</h2>
                            </Route>
                            <Route exact path="/cart">
                                <CartScreen />
                            </Route>
                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Router>
                </CartProvider>
            </UIContextProvider>
        </>

    );
}

export default App;