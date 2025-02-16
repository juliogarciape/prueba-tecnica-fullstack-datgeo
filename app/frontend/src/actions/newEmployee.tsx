'use server'

import { API_URL } from '@/config/constants'
import { cookies } from 'next/headers'

export async function submitForm(prevState: any, formData: FormData) {
	const first_name = formData.get('first_name') as string
	const last_name = formData.get('last_name') as string
	const email = formData.get('email') as string
	const password = formData.get('password') as string
	const job_title = formData.get('job_title') as string
	const identity_document = formData.get('identity_document') as string
	const salary = formData.get('salary') as string
	const cookieStore = await cookies()
	const token = cookieStore.get('access_token')?.value

	if (
		!first_name ||
		!email ||
		!password ||
		!last_name ||
		!job_title ||
		!identity_document ||
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
				first_name,
				last_name,
				email,
				password,
				job_title,
				identity_document,
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
			success: `Formulario enviado: Empleado ${first_name} ${last_name} fue dado de alta.`,
		}
	} catch (error) {
		return { error: 'Error al conectar con la API.' }
	}
}
