'use server'

import { API_URL } from '@/config/constants'
import { cookies } from 'next/headers'

export async function submitForm(prevState: any, formData: FormData) {
	const firstName = formData.get('first_name') as string
	const lastName = formData.get('last_name') as string
	const email = formData.get('email') as string
	const password = formData.get('password') as string
	const jobTitle = formData.get('job_title') as string
	const dni = formData.get('dni') as string
	const salary = formData.get('salary') as string
	const cookieStore = await cookies()
	const token = cookieStore.get('access_token')

	if (
		!firstName ||
		!email ||
		!password ||
		!lastName ||
		!jobTitle ||
		!dni ||
		!salary
	) {
		return { error: 'Todos los campos son obligatorios.' }
	}

	try {
		const response = await fetch(API_URL + '/users/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
				jobTitle,
				dni,
				salary,
			}),
		})

		if (!response.ok) {
			const errorData = await response.json()
			return { error: errorData.message || 'Error en la API externa' }
		}

		const data = await response.json()

		if (data.error) {
			return { error: data.message }
		}

		return {
			success: `Formulario enviado: Empleado ${firstName} ${lastName} fue dado de alta.`,
		}
	} catch (error) {
		return { error: 'Error al conectar con la API.' }
	}
}
