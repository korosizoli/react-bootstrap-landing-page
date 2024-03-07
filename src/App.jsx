import React from "react";
import "./scss/index.css";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Vision from "./sections/Vision";
import Doctors from "./sections/Doctors";
import Appointment from "./sections/Appointment";
import Footer from "./sections/Footer";

function App() {
	return (
		<div>
			<NavBar />
      <Hero />
			<About />
			<Services />
			<Vision />
			<Doctors />
			<Appointment />
			<Footer />
		</div>
	);
}

export default App;
