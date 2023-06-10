import Layout from '@/components/Layout';
import './globals.css';

export const metadata = {
	title: 'SUPERTOOLS',
	description:
		'Uma super ferramenta que reúne várias funcionalidades em um lugar só!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="shortcut icon" href="/braco.svg" type="text/svg" />
			</head>
			<Layout>{children}</Layout>
		</html>
	);
}
