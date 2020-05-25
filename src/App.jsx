import React, { Component } from "react";
import CakeContainer from "./components/CakeContainer.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksCakeContainer from './components/HooksCakeContainer.jsx'
class App extends Component {
  // => Com3333ponent
  render() {
    return (
      <Provider store={store}>
        <HooksCakeContainer/>
        <CakeContainer />
      </Provider>
    );
  }
}

export default App;
