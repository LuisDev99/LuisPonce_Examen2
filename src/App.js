import React, { Component } from "react";
import "./App.css";
import Home from './components/Home';
import Weather from './components/Weather';
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (

  <Router>
    <div>
      <Switch>
        <Route path="/" exact component = {Home}></Route>
        <Route path="/Weather/:month/:day" component = {Weather}></Route>
      </Switch>
    </div>
  </Router>

);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;