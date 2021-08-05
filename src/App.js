import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/commons/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Main/>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
