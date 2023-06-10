'use client';

import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Menu = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(!isOpen)}
				className=" flex flex-row justify-center items-center bg-[rgba(255,255,255,0.2)] w-10 h-10 rounded-sm absolute right-10 top-5"
			>
				<AiOutlineMenu size="20px" />
			</button>
			{isOpen && (
				<ul>
					<li>Remover linhas duplicadas</li>
					<li>Ordem alfabética</li>
				</ul>
			)}
		</>
	);
};

export default Menu;
