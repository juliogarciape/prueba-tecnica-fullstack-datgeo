'use server'

import { API_URL } from '@/config/constants'

export async function login(user) {
	const res = await fetch(API_URL + '/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ user }),
		credentials: 'include', // Si usas cookies para autenticación
	})

	if (!res.ok) {
		throw new Error('Error al iniciar sesión')
	}

	return res.json() // Devuelve el token o datos de usuario
}
