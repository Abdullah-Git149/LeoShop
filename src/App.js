import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/details/:id" exact component={Details}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Provider>
        <Footer />
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
