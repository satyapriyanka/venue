import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import HighLights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="App" style={{ height: '1500px', backgroundColor: 'blue' }}>
				<Header />

				<Element name="Event Starts In">
					<Featured />
				</Element>
				<Element name="Venue INFO">
					<VenueInfo />
				</Element>
				<Element name="Highlights">
					<HighLights />
				</Element>
				<Element name="Pricing">
					<Pricing />
				</Element>
				<Element name="Location">
					<Location />
				</Element>

				<Footer />
			</div>
		);
	}
}

export default App;
