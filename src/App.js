import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.components";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      curruntUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ curruntUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header curruntUser={this.state.curruntUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="signIn" element={<SignInAndSignUpPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
