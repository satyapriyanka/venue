import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {
	const scrollToElements = (elemet) => {
		scroller.scrollTo(elemet, {
			duration: 500,
			delay: 100,
			smooth: true,
			offset: -150
		});
		props.onClose();
	};

	return (
		<Drawer anchor="right" open={props.open} onClose={props.onClose}>
			<List component="nav">
				{[ 'Event Starts In', 'Venue INFO', 'Highlights', 'Pricing', 'Location' ].map((text, index) => {
					return (
						<ListItem key={index} button onClick={() => scrollToElements(text)}>
							{text}
						</ListItem>
					);
				})}
			</List>
		</Drawer>
	);
};

export default SideDrawer;
