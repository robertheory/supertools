import Image from 'next/image';
import React from 'react';
import Menu from './Menu';

const Header = () => (
	<header className="w-[100vw] h-[80px] bg-slate-600 p-4 flex flex-row justify-center">
		<div className="flex flex-row justify-center items-end">
			<Image src="/braco.svg" width={40} height={40} alt="Braço" />
			<h1>SuperTOOLS</h1>
			<Image
				src="/braco.svg"
				width={40}
				height={40}
				alt="Braço"
				className="scale-x-[-1]"
			/>
		</div>

		<Menu />
	</header>
);

export default Header;
