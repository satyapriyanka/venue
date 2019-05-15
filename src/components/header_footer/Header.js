import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

class Header extends Component {
	state = { drawerOpen: false, headerShow: false };

	toogleDrawerOpen = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen
		});
	};

	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				this.setState({
					headerShow: true
				});
			} else {
				this.setState({
					headerShow: false
				});
			}
		});
	}

	render() {
		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
					boxShadow: 'none',
					padding: '10px 0px'
				}}
			>
				<Toolbar>
					<div className="header_logo">
						<div className="font_righteous header_logo_venue">The Venue</div>
						<div className="header_logo_title">Musical Events</div>
					</div>

					<IconButton aria-label="Menu" color="inherit">
						<MenuIcon onClick={this.toogleDrawerOpen} />
					</IconButton>

					<SideDrawer open={this.state.drawerOpen} onClose={this.toogleDrawerOpen} />
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
