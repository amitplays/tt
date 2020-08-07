import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import FAQs from "./Components/FAQs";
import AboutUs from "./Components/AboutUs";
import AdminPanel from "./Components/AdminPanel";
import Services from "./Components/Services";
import ContactForm from "./Components/ContactForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/ContactForm" component={ContactForm} />
        <Route path="/Home" component={Home} />
        <Route path="/AdminPanel" component={AdminPanel} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/Services" component={Services} />
      </Router>
    </div>
  );
}

export default App;
