import React from 'react';
import Positions from '../../../modules/my-positions/components/my-positions';
import PositionsMarketOverview from '../../my-positions/components/my-positions-market-overview';
import Link from '../../link/components/link';

const PortfolioPositions = (p) => (
	<div className="positions-content" >
		{!!p.markets && !!p.markets.length && p.markets.map(positionMarket => {
			const market = Object.assign({}, positionMarket);
			delete market.marketLink.text;

			return (
				<Link key={market.id} {...market.marketLink} >
					<div className="positions-container" >
						<PositionsMarketOverview
							description={market.description}
							{...market.myPositionsSummary}
						/>
						{!!market.myPositionOutcomes && !!market.myPositionOutcomes.length &&
						<Positions
							className="page-content positions-content"
							type={market.type}
							outcomes={market.myPositionOutcomes}
						/>
						}
					</div>
				</Link>
			);
		})}
	</div>
);

PortfolioPositions.propTypes = {
	markets: React.PropTypes.array.isRequired
};

export default PortfolioPositions;
