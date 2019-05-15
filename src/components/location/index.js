import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.723197347663!2d-122.12237118407955!3d47.670373491562984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549072afb876868d%3A0xbedead4deb82a1a7!2sRedmond+Town+Center!5e0!3m2!1sen!2sus!4v1546710757638"
				width="100%"
				height="500px"
				frameBorder="0"
				style={{ border: 0 }}
				allowFullScreen
				title="Location"
			/>
			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
