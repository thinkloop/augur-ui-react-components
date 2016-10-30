import React, { PropTypes } from 'react';
import Link from '../../link/components/link';

const LoginMessagePage = p => (
	<main className="page login-message">
		<div className="page-content">
			<h1>{`Welcome to the Augur beta test!`}</h1>
			<p>{`This is a beta test in advance of Augur's live release. There are bugs. There are features being
				added, improved, and re-designed. There are a few hundred enhancements scheduled to be added in the next few
				months. Your thoughtful feedback now is essential. Please use the feedback button at the bottom left of
				every page to submit your feedback, or feel free to send an email to `}
				<a
					className="link"
					href="mailto:hugs@augur.net?subject=Beta Testing feedback"
				>
					{'hugs@augur.net'}
				</a>
				{`. From your submissions, the development team will coordinate fixes and new features. Changes and fixes will be
				displayed when you log in again.`}
			</p>
			<h2>Important information:</h2>
			<ol>
				<li>
					Because Augur is a <b>completely decentralized</b> system, if you lose your login credentials it
					is impossible to recover them. Please <a className="link" href="http://blog.augur.net/faq/how-do-i-savebackup-my-wallet/" target="_blank" rel="noopener noreferrer">take
					appropriate measures</a> to protect the safety of your password, and create a way to
					recover your credentials if you forget them.
				</li>
				<li>
					Do not send real Ether (ETH) to your Augur account while we are testing! Each account will be given
					10,000 testnet ETH tokens for beta testing. Please note that testnet ETH has no value except for testing:
					it is merely an on-contract IOU (a token) for testnet Ether.
				</li>
				<li>
					{`Reputation (REP) is a unique and important part of the Augur trading platform. If you own REP tokens, you must visit
					the site periodically to fulfill your reporting obligations. During beta testing, each new account will
					receive 47 testnet REP (they have no value except for testing). Each reporting cycle will last 2 days. Every
					two-day cycle will consist of a commit phase, a reveal phase, and a challenge phase. Because the test
					cycle is dramatically compressed (the main net cycle will be 60 days long) it is recommended that
					users visit the site at least every 2 days to maintain your REP and simulate “real money” trading,
					resolution, and reporting conditions. Learn `}
					<a
						className="link"
						href="https://www.youtube.com/watch?v=sCms-snzHk4"
						target="_blank"
						rel="noopener noreferrer"
					>
						{`how Augur's Reputation tokens work`}
					</a>.
				</li>
				<li>
					{`The site is only as fast as Ethereum blocks are mined. However, it is important to know that all orders
					are placed into order books according to best price, and in the order in which they are received. This
					preserves price/time priority in Augur's markets.`}
				</li>
			</ol>
			<h2>Technical updates:</h2>
			<h3>October 30, 2016</h3>
			<ol>
				<li>
					Market ID is now looked up automatically when getting events that you are required to report on.  All reports you are required to fill out are now loaded during the initial markets loading (rather than only after you happen to browse to the page containing the associated markets).
				</li>
				<li>
					Updated/fixed the middleware and UI reporting user-test setup functions, and successfully completed a run-thru of the UI reporting setup.
				</li>
			</ol>
			<h3>October 29, 2016</h3>
			<ol>
				<li>
					Fully automated to-fixed-point parameter conversions and from-fixed-point return value conversions.  Fixed-point parameter names (will) start with &quot;fxp&quot;, and functions with fixed-point return values have &quot;# @return fxp&quot; on the line prior to the function definition.  To support these changes, I added fixed-point conversions to the auto-generated API (as well as the associated static API data and back-end API maker script).
				</li>
				<li>
					Added result parser method names to the auto-generated API.  In combination with automatic fixed-point conversion, nearly all the API will now be dynamically generated and can be updated automatically when new contracts are uploaded.  The only remaining manual API endpoints will be a handful of bindings that do a significant amount of pre- or post-request processing: the &quot;big getters&quot;, the primary trading methods (buy, ask, and trade on the develop contracts), and a couple of the reporting methods.
				</li>
				<li>
					Started full remove-and-resync of the Augur geth public testnet node (eth3.augur.net and wss.augur.net).
				</li>
				<li>
					Market detail page now displays market creation and ending date and time (instead of just the date).  Hovering displays the full UTC timestamp, including milliseconds and day of the week.
				</li>
				<li>
					Removed deprecated onConfirmed callbacks from augur.js.
				</li>
				<li>
					Normalized market IDs received from get-market-ID-from-event-ID methods getMarket and getMarkets.
				</li>
			</ol>
			<h3>October 28, 2016</h3>
			<ol>
				<li>
					Re-organized this technical updates list a bit :)
				</li>
				<li>
					If you cannot afford to make a trade, the Place Trade button will be disabled.  (If you hover over it, a popup will inform you that you do not have enough funds to make the trade.)
				</li>
				<li>
					Re-introduced Doorbell.io &quot;Feedback&quot; button in the lower left-hand corner.
				</li>
				<li>
					Pointed <a className="link" rel="noopener noreferrer" target="_blank" href="https://augur-dev.firebaseapp.com">augur-dev</a> and <a className="link" rel="noopener noreferrer" target="_blank" href="http://local.augur.net">local.augur.net</a> at our private testing chain (geth JSON RPC endpoints: <a className="link" rel="noopener noreferrer" target="_blank" href="https://eth9000.augur.net">HTTPS</a>, <a className="link" rel="noopener noreferrer" target="_blank" href="wss://ws9000.augur.net">websockets</a>).  The public (Morden) testnet has been almost unusable for the past several weeks due to excessive network congestion.  Once things are moving on Morden again, our test instances will switch back.  (Note: <a className="link" rel="noopener noreferrer" target="_blank" href="https://app.augur.net">app.augur.net</a> remains pointed at the Morden testnet for now, although we may redirect that as well soon.)
				</li>
				<li>
					There is now a popup displaying the &quot;maximum number of shares&quot; you can buy at a particular limit price (only visible after you have entered a limit price).
				</li>
				<li>
					Increased the lifetime of chat messages (Whisper TTL) to 1 week; plan is to decrease this if/when the chatbox starts seeing more use.
				</li>
			</ol>
			<h3>October 27, 2016</h3>
			<ol>
				<li>
					Percent fee now always displays as a positive number.
				</li>
				<li>
					Finished fixing/updating the integration tests for augur.js.
				</li>
				<li>
					Upgraded our private chain geth instance server (Linode) to support an expanded testing group.
				</li>
				<li>
					Added extra blocknumber check and catch-up for missed blocks due to dropped websocket connections.
				</li>
				<li>
					augur.js unit tests have been fixed/updated and are now working properly.
				</li>
			</ol>
			{p.marketsLink &&
				<Link className="lets-do-this-button" {...p.marketsLink} >{`Let's do this!`}</Link>
			}
		</div>
	</main>
);

LoginMessagePage.propTypes = {
	marketsLink: PropTypes.object // TODO
};

export default LoginMessagePage;
