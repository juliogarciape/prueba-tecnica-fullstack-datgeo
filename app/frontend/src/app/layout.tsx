import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['800'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Recursos Humanos - Sistema de Empleados',
	description:
		'Este es un sistema de administracion de empleados para el área de Recursos Humanos',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	)
}
