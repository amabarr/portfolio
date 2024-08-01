import React from "react";

export const ContactForm: React.FC = () => (
	<div className='contactForm'>
		<form
			name='contact'
			method='POST'
			data-netlify='true'
			data-netlify-honeypot='bot-field'
			className='contact'
		>
			<input type='hidden' name='form-name' value='contact' />
			<input type='hidden' name='bot-field' />

			<label htmlFor="name">
				Name: 
			</label>
			<input type='text' name='name' placeholder='Your Name Here' required />
			<label htmlFor="email"> 
				Email: 	
			</label>
			<input type='email' name='email' placeholder='email@email.com' required />
		
		<label htmlFor="message"> 
		Message: 
		</label>
		<textarea
				name='message'
				placeholder='Here is my message to you.'
				required
		/>
		
			<button type='submit'>Send</button>
		</form>
	</div>
);
