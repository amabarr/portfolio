import React, { useState } from "react";

export default () => {
	return (
		<div className='contact'>
			<form method='post' action='mailto:abarrafato@gmail.com'>
				<label htmlFor='Subject'>
					<h3>Subject</h3>
					<input id='Subject:' placeholder='Subject' />
				</label>
				<label htmlFor='Body:'>
					<h3>Body</h3>
					<textarea id='Body:' placeholder='Say something' />
				</label>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
};
