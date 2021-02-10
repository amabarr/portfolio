import React from "react";

export default () => {
	return (
		<div className='contact'>
			<form
				name='contact'
				method='POST'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
			>
				<input type='hidden' name='form-name' value='contact' />
				<p>
					<label>
						Name: <input type='text' name='name' placeholder='Your Name Here' />
					</label>
				</p>
				<p>
					<label>
						Email:{" "}
						<input type='email' name='email' placeholder='email@email.com' />
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name='message'></textarea>
					</label>
				</p>
				<p>
					<button type='submit'>Send</button>
				</p>
			</form>
		</div>
	);
};
