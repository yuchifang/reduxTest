import React, { Component } from "react";
import CakeContainer from "./components/CakeContainer.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksCakeContainer from './components/HooksCakeContainer.jsx'
import HooksIceCreamContainer from './components/HooksIceCreamContainer.jsx'
import HooksRiceContainer from './components/HooksRiceContainer.jsx'
import NewCakeContainer from './components/NewCakeContainer.jsx'
import ItemContainer from './components/ItemContainer.jsx'
import UserContainer from './components/UserContainer.jsx'
class App extends Component {
  // => Com3333ponent
  render() {
    return (
      <Provider store={store}>
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer />
        <HooksIceCreamContainer/>
        <HooksCakeContainer/>
        <CakeContainer />
        <HooksRiceContainer/>
        <NewCakeContainer/> */}
      </Provider>
    );
  }
}

export default App;
