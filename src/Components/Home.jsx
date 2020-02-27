import React, { Component } from "react";
import Header from "./Header";
import HomePageBody from "./HomepageBody";
import LabelBottomNavigation from "./LabelBottomNavigation";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <Header />
        <br></br>
        <br></br>
        <HomePageBody />
        <br></br>
        <LabelBottomNavigation></LabelBottomNavigation>
      </div>
    );
  }
}

export default Home;
