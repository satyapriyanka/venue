import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import TicketButton from '../utils/TicketButton';

class Discount extends Component {
	state = {
		discountStart: 0,
		discountEnd: 30
	};

	percentage = () => {
		if (this.state.discountStart < this.state.discountEnd) {
			this.setState({
				discountStart: this.state.discountStart + 1
			});
		}
	};

	componentWillUpdate() {
		setTimeout(() => {
			this.percentage();
		}, 20);
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="discount_wrapper">
					<Fade onReveal={() => this.percentage()}>
						<div className="discount_porcentage">
							<span>{this.state.discountStart}%</span>
							<span>OFF</span>
						</div>
					</Fade>
					<Slide right>
						<div className="discount_description">
							<h3>Purchase tickets before 20th JUNE</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis. Sed egestas
								egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
							</p>
							<TicketButton link="https://www.google.com" color="#ffffff" bck="#ffa800">
								Purchase Tickets
							</TicketButton>
						</div>
					</Slide>
				</div>
			</div>
		);
	}
}

export default Discount;
