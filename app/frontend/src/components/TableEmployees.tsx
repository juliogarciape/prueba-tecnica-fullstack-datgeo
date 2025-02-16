'use client'

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Employee } from '@/types/employee.type'
import { Button } from '@mui/material'

interface IProps {
	data: Employee[]
}

export default function TableEployees({ data }: IProps) {
	return (
		<div>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">ID</TableCell>
							<TableCell align="center">Nombres</TableCell>
							<TableCell align="center">Apellidos</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Puesto Trabajo</TableCell>
							<TableCell align="center">Salario</TableCell>
							<TableCell align="center">Opciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((employee: Employee) => (
							<TableRow
								key={employee.id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell align="center">
									{employee.id}
								</TableCell>
								<TableCell align="center">
									{employee.first_name}
								</TableCell>
								<TableCell align="center">
									{employee.last_name}
								</TableCell>
								<TableCell align="center">
									{employee.email}
								</TableCell>
								<TableCell align="center">
									{employee.employee?.job_title}
								</TableCell>
								<TableCell align="center">
									S/ {employee.employee?.salary}
								</TableCell>
								<TableCell align="center">
									<Button variant="contained" color="warning">
										Editar Empleado
									</Button>
									<Button variant="contained" color="error">
										Baja de Empleado
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[3, 5]}
				component="div"
				count={data.length}
				page={0}
				rowsPerPage={data.length}
				onPageChange={() => {}}
			/>
		</div>
	)
}
