import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
	children?: ReactElement;
}

export default function PrivateRoute({
	children,
}: PrivateRouteProps): React.ReactElement | null {
	const isAuthenticated = localStorage.getItem('userToken');
	if (isAuthenticated === null || isAuthenticated === 'false') {
		return <Navigate to='/login' />;
	} else {
		return <Outlet />;
	}
}
