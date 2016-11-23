import React from 'react';

import Nav from 'modules/app/components/nav';

const Header = p => (
	<header className="app-header">
		<Nav
			{...p}
			className="nav-header"
		/>
	</header>
);

export default Header;
