import NavBar from '@/components/NavBar'
import UserInfo from '@/components/UserInfo'
import { API_URL } from '@/config/constants'
import { Box } from '@mui/material'
import { cookies } from 'next/headers'

export default async function MiPerfil() {
	const cookieStore = await cookies()
	const res = await fetch(API_URL + '/users/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookieStore.get('access_token')?.value}`,
		},
	})
	const data = await res.json()

	const resDocuments = await fetch(API_URL + '/documents/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookieStore.get('access_token')?.value}`,
		},
	})

	const documents = await resDocuments.json()

	if (data.statusCode === 401 || documents.statusCode === 401) {
		return <h1>401 Unauthorized</h1>
	}

	return (
		<Box>
			<NavBar title="Informacion de Perfil" />
			<UserInfo data={data} documents={documents} />
		</Box>
	)
}
