import React from "react";
import explorer from "../images/explorer.jpg";

export const Music = () => (
	<div className='music'>
		<img
			src={explorer}
			alt='Amanda playing guitar'
			loading='lazy'
			className='explorer'
		/>
		<div className='musicPlayers flex'>
			<iframe
				style={{ border: "0" }}
				title='Out Past Curfew'
				src='https://bandcamp.com/EmbeddedPlayer/track=1347945332/size=large/bgcol=ffffff/linkcol=9a64ff/tracklist=false/artwork=small/transparent=true/'
				seamless
			>
				<a href='https://anxiousanxious.bandcamp.com/track/out-past-curfew'>
					Out Past Curfew by Anxious? Anxious!
				</a>
			</iframe>

			<iframe
				style={{ border: "0" }}
				title='Am I Woke Yet?'
				src='https://bandcamp.com/EmbeddedPlayer/track=2261413950/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/'
				seamless
			>
				<a href='https://strangelips.bandcamp.com/track/am-i-woke-yet'>
					Am I Woke Yet? by Strange Lips
				</a>
			</iframe>
		</div>
	</div>
);
