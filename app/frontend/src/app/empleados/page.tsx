import NavBar from '@/components/NavBar'
import { API_URL } from '@/config/constants'
import TableEployees from '@/components/TableEmployees'
import { Box } from '@mui/material'
import { cookies } from 'next/headers'
import NewEmployee from '@/components/NewEmployee'

export default async function Empleados() {
	const cookieStore = await cookies()
	const res = await fetch(API_URL + '/users', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookieStore.get('access_token')?.value}`,
		},
	})
	const data = await res.json()

	if (data.statusCode === 401) {
		return <h1>401 Unauthorized</h1>
	}

	return (
		<Box>
			<NavBar title="Administracion de Empleados" />
			<Box p={2} maxWidth={'lg'} margin={'auto'}>
				<NewEmployee />
				<TableEployees data={data} />
			</Box>
		</Box>
	)
}
