import NavBar from '@/components/NavBar'
import { API_URL } from '@/config/constants'
import TableEployees from '@/components/TableEmployees'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Box, Button } from '@mui/material'

export default async function Empleados() {
	/* 	const data = await fetch(API_URL + '/users')
	const employees = await data.json() */

	return (
		<Box>
			<NavBar title="Administracion de Empleados" />
			<Box p={2}>
				<Button startIcon={<PersonAddIcon />} variant="outlined">
					Alta de Empleado
				</Button>
				{/* <TableEployees data={employees} /> */}
			</Box>
		</Box>
	)
}
