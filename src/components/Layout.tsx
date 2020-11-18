import React, {FC, ReactElement} from 'react';

interface ILayoutProps {
	children: ReactElement
}

const Layout: FC<ILayoutProps> = ({children}: ILayoutProps) => (
	<div className="d-flex flex-column justify-content-center min-vh-100">
		<div className="container">
			{children}
		</div>
	</div>
);

export default Layout;
