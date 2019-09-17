import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import FAQs from "./Components/FAQs";
import Services from "./Components/Services";
import ContactForm from "./Components/ContactForm";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/ContactForm" component={ContactForm} />
				<Route path="/Home" component={Home} />
				<Route path="/FAQs" component={FAQs} />
				<Route path="/Services" component={Services} />
				{/* <Route path="/FAQs" component={FAQs} /> */}
			</Router>
		</div>
	);
}

export default App;
