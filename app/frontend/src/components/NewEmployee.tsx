'use client'
import { submitForm } from '@/actions/newEmployee'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

export default function NewEmployee() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const { pending } = useFormStatus()
	const [state, formAction] = useFormState(submitForm, { error: null })

	return (
		<>
			<Button
				startIcon={<PersonAddIcon />}
				variant="outlined"
				size="large"
				sx={{ marginBottom: 5 }}
				onClick={handleOpen}
			>
				Alta de Empleado
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 800,
						bgcolor: 'background.paper',
						boxShadow: 24,
						p: 4,
					}}
					method="post"
					component="form"
					action={formAction}
				>
					<Typography
						variant="h5"
						fontWeight={'bold'}
						marginBottom={3}
					>
						Alta de empleado
					</Typography>

					<Stack spacing={3}>
						<Stack direction={'row'} spacing={3}>
							<TextField
								label="Nombres"
								name="first_name"
								margin={'normal'}
								required
								fullWidth
							/>
							<TextField
								label="Apellidos"
								name="last_name"
								margin={'normal'}
								required
								fullWidth
							/>
						</Stack>
						<Stack direction={'row'} spacing={3}>
							<TextField
								label="Correo Electronico"
								name="email"
								margin={'normal'}
								required
								fullWidth
							/>
							<TextField
								label="Salario"
								name="salary"
								margin={'normal'}
								required
								fullWidth
							/>
						</Stack>
						<Stack direction={'row'} spacing={3}>
							<TextField
								label="Puesto"
								name="job_title"
								margin={'normal'}
								required
								fullWidth
							/>
							<TextField
								label="DNI"
								name="dni"
								margin={'normal'}
								required
								fullWidth
							/>
						</Stack>
						<Stack>
							<TextField
								label="Contraseña"
								type="password"
								name="password"
								margin={'normal'}
								required
								fullWidth
							/>
						</Stack>
						<Stack spacing={3}>
							<Button
								type="submit"
								variant="contained"
								size="large"
								disabled={pending}
							>
								{pending ? 'Cargando' : 'Dar de alta'}
							</Button>
							{state?.error && (
								<Typography color="error">
									{state.error}
								</Typography>
							)}
							{state?.success && (
								<Typography color="primary">
									{state.success}
								</Typography>
							)}
						</Stack>
					</Stack>
				</Box>
			</Modal>
		</>
	)
}
