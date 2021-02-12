import React from "react";

export default () => {
	return (
		<div className='contactForm'>
			<form
				name='contact'
				method='POST'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
				className='contact'
			>
				<input type='hidden' name='form-name' value='contact' />
				<input type='text' name='name' placeholder='Your Name Here' />
				<input type='email' name='email' placeholder='email@email.com' />
				<textarea
					name='message'
					placeholder='Here is my message to you.'
				></textarea>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
};
