import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<body className="w-[100vw] h-[100vh] flex flex-col justify-between items-stretch">
			<Header />
			<main className="flex flex-1 w-[100vw] bg-slate-500 ">{children}</main>
			<Footer />
		</body>
	);
};

export default Layout;
