import { NextRequest, NextResponse } from 'next/server'
import { API_URL } from './config/constants'

export async function middleware(req: NextRequest) {
	const token = req.cookies.get('access_token')?.value
	const url = req.nextUrl.clone()

	if (!token && url.pathname !== '/') {
		url.pathname = '/'
		return NextResponse.redirect(url)
	}

	if (token) {
		try {
			const response = await fetch(`${API_URL}/auth/verify-token`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})

			if (response.ok) {
				const { role } = await response.json()

				if (url.pathname === '/auth') {
					url.pathname =
						role === 'admin' ? '/empleados' : '/mi-perfil'
					return NextResponse.redirect(url)
				}

				if (url.pathname === '/') {
					url.pathname =
						role === 'admin' ? '/empleados' : '/mi-perfil'
					return NextResponse.redirect(url)
				}

				if (role !== 'admin' && url.pathname === '/empleados') {
					url.pathname = '/mi-perfil'
					return NextResponse.redirect(url)
				}

				if (role !== 'employee' && url.pathname === '/mi-perfil') {
					url.pathname = '/empleados'
					return NextResponse.redirect(url)
				}
			}
		} catch (error) {
			console.error('Error validating token:', error)
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/', '/empleados', '/mi-perfil', '/auth'],
}
