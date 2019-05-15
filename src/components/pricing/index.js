import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import TicketButton from '../utils/TicketButton';

class Pricing extends Component {
	state = {
		prices: [
			{
				price: 100,
				position: 'Balcony',
				linkTo: 'http://sales/b',
				delay: 500,
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
			},
			{
				price: 150,
				position: 'Medium',
				linkTo: 'http://sales/m',
				delay: 0,
				desc:
					'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, '
			},
			{
				price: 250,
				position: 'Star',
				linkTo: 'http://sales/s',
				delay: 500,
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin wor'
			}
		]
	};

	showBoxes = () => {
		return this.state.prices.map((item, index) => {
			return (
				<Zoom delay={item.delay} key={index}>
					<div className="pricing_item">
						<div className="pricing_inner_wrapper">
							<div className="pricing_title">
								<span>${item.price}</span>
								<span>{item.position}</span>
							</div>
							<div className="pricing_description">{item.desc}</div>
							<div className="pricing_buttons">
								{
									<TicketButton link={item.linkTo} color="#ffffff" bck="#ffa800">
										Purchase Tickets
									</TicketButton>
								}
							</div>
						</div>
					</div>
				</Zoom>
			);
		});
	};

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
					<div className="pricing_wrapper">{this.showBoxes()}</div>
				</div>
			</div>
		);
	}
}

export default Pricing;
