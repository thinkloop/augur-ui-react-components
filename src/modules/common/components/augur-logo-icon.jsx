import React from 'react';

// NOTE -- This stateless component is simply a responsive SVG of the Complete Augur Icon
// To employ, just set the width or height on the containing element and this SVG will respond appropriately
const AugurLogoIcon = () => (
	<svg
		className="augur-logo-icon"
		viewBox="0 0 240 240"
	>
		<defs>
			<style>
				{'.icon-cls-1,.icon-cls-3,.icon-cls-5{fill:#fff;}.icon-cls-1{clip-rule:evenodd;}.icon-cls-2{fill:none;}.icon-cls-3{fill-rule:evenodd;}.icon-cls-4{clip-path:url(#clip-path-icon);}'}
			</style>
			<clipPath
				id="clip-path-icon"
				transform="translate(39.37 25)"
			>
				<path
					className="icon-cls-1"
					d="M115.28,97.71a36.63,36.63,0,0,0-10.37-15.44l0,0q-.86-.76-1.76-1.46l-.07-.06q-.88-.68-1.81-1.31l-.12-.08q-.91-.61-1.85-1.17l-.16-.1q-.93-.55-1.9-1l-.19-.1q-1-.48-2-.91l-.22-.09c-.58-.24-1.16-.48-1.76-.69h0a36.33,36.33,0,0,0-5-1.42A26.09,26.09,0,0,1,83,80.48,29.4,29.4,0,0,1,96.42,85l.23.14c.38.25.75.51,1.12.78l.51.36c.33.25.65.51,1,.77l.57.47c.3.26.58.52.87.79l.58.56c.27.27.53.54.79.81l.57.63q.36.41.71.84l.55.7c.22.28.43.57.64.86s.35.51.52.76.39.58.57.88.33.55.49.83.34.59.5.88.3.61.45.92.29.57.42.87.31.76.46,1.15a28.9,28.9,0,0,1,1.7,6.36h0l.92,3.49c.39,1.45,4,14.3,12.36,18.63,9.58,5,22.27,11.18,27.26,13.62L84.3,180.5v-27c0-4.26,8.49-9.25,12.41-11l.23-.13h0c.81-.4,1.61-.84,2.38-1.31l.33-.18v0a36.79,36.79,0,0,0,4.84-3.51v0l.41-.37.46-.42q.72-.66,1.4-1.35L107,135c.5-.51,1-1,1.44-1.59l.42-.49q.56-.67,1.08-1.37l.3-.39c.42-.57.82-1.16,1.21-1.75l.13-.18h0c.53-.83,1-1.67,1.49-2.54a38.24,38.24,0,0,1-4.72-7.4,29,29,0,0,1-1.95,4.34q-.49.9-1,1.76l-.16.23q-.48.73-1,1.43l-.3.4q-.52.68-1.09,1.32l-.2.24A29.38,29.38,0,0,1,94,135.62l-.62.32c-1.67.75-16.41,7.4-16.41,17.52v27L10.85,141c4.26-2.64,16.68-10,26.9-13.24,4-1.25,12.49,4.08,17.3,8l.29.26h0c.63.6,1.3,1.18,2,1.73l.24.21h0a36.76,36.76,0,0,0,4.86,3.34h0l1.15.63.23.12a36.56,36.56,0,0,0,3.41,1.55l.5.2.35.14h0a36.13,36.13,0,0,0,5.13,1.47,25.79,25.79,0,0,1,5.23-6.64,29.21,29.21,0,0,1-8.16-1.81l-.45-.17-.86-.36-.44-.19-.84-.4a29.35,29.35,0,0,1-5.48-3.5l-2.63-2.39a48.41,48.41,0,0,0-7.81-5.58c-6.54-3.72-12-4.93-16.19-3.61-8.74,2.75-18.59,8.09-24.6,11.61L77,13.88V65.77c0,1.84-2.72,6.64-11.79,10.72l-.63.34v0c-.88.43-1.74.9-2.58,1.4l-.17.09h0a36.88,36.88,0,0,0-4.87,3.49h0l0,0a36.9,36.9,0,0,0-2.75,2.59l-.09.09a36.69,36.69,0,0,0-2.43,2.82l-.1.13q-.55.72-1.07,1.46l-.12.18q-.47.69-.92,1.41l-.1.15q-.45.73-.86,1.49l-.19.36c-.25.48-.5,1-.74,1.45l-.11.23c-.22.46-.42.92-.62,1.39l-.21.51c-.2.49-.38,1-.56,1.47l-.17.52q-.19.55-.35,1.12c-.06.21-.13.41-.18.62q-.2.72-.37,1.45c-.06.23-.11.47-.16.71s-.14.68-.2,1-.11.6-.16.91-.12.82-.17,1.23-.06.53-.09.8-.07.73-.09,1.1,0,.73-.06,1.1,0,.45,0,.68h0c0,.28,0,.55,0,.83a36.55,36.55,0,0,0,.41,5.43,36.94,36.94,0,0,1,8.2,3.12,29.12,29.12,0,0,1-1.27-8.06h0c0-.16,0-.33,0-.49,0-.66,0-1.31.07-2,0-.17,0-.34,0-.51,0-.57.11-1.14.19-1.7,0-.08,0-.16,0-.24.09-.63.21-1.25.35-1.86l.11-.47q.18-.77.41-1.53l.1-.33q.27-.89.61-1.75l.16-.39q.29-.72.61-1.43l.16-.36q.4-.84.85-1.65l.16-.27q.4-.7.84-1.38l.21-.32c.35-.52.71-1,1.09-1.54l.07-.09c.36-.47.74-.93,1.13-1.38l.22-.26a29.44,29.44,0,0,1,6.1-5.2L68,83.48c1.67-.75,16.34-7.59,16.34-17.71V13.88l66.53,119.38c-5.94-2.91-16.37-8.05-24.52-12.27-4.66-2.42-7.83-10.94-8.65-14l-.9-3.58h0a36.05,36.05,0,0,0-1.46-5.66h0v0Zm45.07,37.58L87,3.76a7.34,7.34,0,0,0-12.82,0L.92,135.3a7.29,7.29,0,0,0,2.64,9.81L76.86,189a7.35,7.35,0,0,0,7.54,0l73.3-43.85a7.29,7.29,0,0,0,2.64-9.81Zm0,0"
				/>
			</clipPath>
		</defs>
		<rect
			className="icon-cls-2"
			width="240"
			height="240"
		/>
		<path
			className="icon-cls-3"
			d="M115.28,97.71a36.63,36.63,0,0,0-10.37-15.44l0,0q-.86-.76-1.76-1.46l-.07-.06q-.88-.68-1.81-1.31l-.12-.08q-.91-.61-1.85-1.17l-.16-.1q-.93-.55-1.9-1l-.19-.1q-1-.48-2-.91l-.22-.09c-.58-.24-1.16-.48-1.76-.69h0a36.33,36.33,0,0,0-5-1.42A26.09,26.09,0,0,1,83,80.48,29.4,29.4,0,0,1,96.42,85l.23.14c.38.25.75.51,1.12.78l.51.36c.33.25.65.51,1,.77l.57.47c.3.26.58.52.87.79l.58.56c.27.27.53.54.79.81l.57.63q.36.41.71.84l.55.7c.22.28.43.57.64.86s.35.51.52.76.39.58.57.88.33.55.49.83.34.59.5.88.3.61.45.92.29.57.42.87.31.76.46,1.15a28.9,28.9,0,0,1,1.7,6.36h0l.92,3.49c.39,1.45,4,14.3,12.36,18.63,9.58,5,22.27,11.18,27.26,13.62L84.3,180.5v-27c0-4.26,8.49-9.25,12.41-11l.23-.13h0c.81-.4,1.61-.84,2.38-1.31l.33-.18v0a36.79,36.79,0,0,0,4.84-3.51v0l.41-.37.46-.42q.72-.66,1.4-1.35L107,135c.5-.51,1-1,1.44-1.59l.42-.49q.56-.67,1.08-1.37l.3-.39c.42-.57.82-1.16,1.21-1.75l.13-.18h0c.53-.83,1-1.67,1.49-2.54a38.24,38.24,0,0,1-4.72-7.4,29,29,0,0,1-1.95,4.34q-.49.9-1,1.76l-.16.23q-.48.73-1,1.43l-.3.4q-.52.68-1.09,1.32l-.2.24A29.38,29.38,0,0,1,94,135.62l-.62.32c-1.67.75-16.41,7.4-16.41,17.52v27L10.85,141c4.26-2.64,16.68-10,26.9-13.24,4-1.25,12.49,4.08,17.3,8l.29.26h0c.63.6,1.3,1.18,2,1.73l.24.21h0a36.76,36.76,0,0,0,4.86,3.34h0l1.15.63.23.12a36.56,36.56,0,0,0,3.41,1.55l.5.2.35.14h0a36.13,36.13,0,0,0,5.13,1.47,25.79,25.79,0,0,1,5.23-6.64,29.21,29.21,0,0,1-8.16-1.81l-.45-.17-.86-.36-.44-.19-.84-.4a29.35,29.35,0,0,1-5.48-3.5l-2.63-2.39a48.41,48.41,0,0,0-7.81-5.58c-6.54-3.72-12-4.93-16.19-3.61-8.74,2.75-18.59,8.09-24.6,11.61L77,13.88V65.77c0,1.84-2.72,6.64-11.79,10.72l-.63.34v0c-.88.43-1.74.9-2.58,1.4l-.17.09h0a36.88,36.88,0,0,0-4.87,3.49h0l0,0a36.9,36.9,0,0,0-2.75,2.59l-.09.09a36.69,36.69,0,0,0-2.43,2.82l-.1.13q-.55.72-1.07,1.46l-.12.18q-.47.69-.92,1.41l-.1.15q-.45.73-.86,1.49l-.19.36c-.25.48-.5,1-.74,1.45l-.11.23c-.22.46-.42.92-.62,1.39l-.21.51c-.2.49-.38,1-.56,1.47l-.17.52q-.19.55-.35,1.12c-.06.21-.13.41-.18.62q-.2.72-.37,1.45c-.06.23-.11.47-.16.71s-.14.68-.2,1-.11.6-.16.91-.12.82-.17,1.23-.06.53-.09.8-.07.73-.09,1.1,0,.73-.06,1.1,0,.45,0,.68h0c0,.28,0,.55,0,.83a36.55,36.55,0,0,0,.41,5.43,36.94,36.94,0,0,1,8.2,3.12,29.12,29.12,0,0,1-1.27-8.06h0c0-.16,0-.33,0-.49,0-.66,0-1.31.07-2,0-.17,0-.34,0-.51,0-.57.11-1.14.19-1.7,0-.08,0-.16,0-.24.09-.63.21-1.25.35-1.86l.11-.47q.18-.77.41-1.53l.1-.33q.27-.89.61-1.75l.16-.39q.29-.72.61-1.43l.16-.36q.4-.84.85-1.65l.16-.27q.4-.7.84-1.38l.21-.32c.35-.52.71-1,1.09-1.54l.07-.09c.36-.47.74-.93,1.13-1.38l.22-.26a29.44,29.44,0,0,1,6.1-5.2L68,83.48c1.67-.75,16.34-7.59,16.34-17.71V13.88l66.53,119.38c-5.94-2.91-16.37-8.05-24.52-12.27-4.66-2.42-7.83-10.94-8.65-14l-.9-3.58h0a36.05,36.05,0,0,0-1.46-5.66h0v0Zm45.07,37.58L87,3.76a7.34,7.34,0,0,0-12.82,0L.92,135.3a7.29,7.29,0,0,0,2.64,9.81L76.86,189a7.35,7.35,0,0,0,7.54,0l73.3-43.85a7.29,7.29,0,0,0,2.64-9.81Zm0,0"
			transform="translate(39.37 25)"
		/>
		<g className="icon-cls-4">
			<rect
				className="icon-cls-5"
				x="34.37"
				y="20"
				width="171.27"
				height="200"
			/>
		</g>
	</svg>
);

export default AugurLogoIcon;
