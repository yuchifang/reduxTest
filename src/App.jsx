import React, { Component } from "react";
import CakeContainer from "./components/CakeContainer.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store";
class App extends Component {
  // => Com3333ponent
  render() {
    return (
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    );
  }
}

export default App;
