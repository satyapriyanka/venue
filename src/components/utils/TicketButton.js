import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const TicketButton = (props) => {
	return (
		<Button
			href={props.link || 'http://www.google.com'}
			variant="contained"
			size="small"
			style={{
				background: props.bck || 'red',
				color: props.color || 'white'
			}}
		>
			<img src={TicketIcon} className="iconImage" alt="icon_button" />
			{props.children}
		</Button>
	);
};

export default TicketButton;
