'use client'
import { Stack, Box, Container, Button, TextField } from '@mui/material'
import NavBar from '@/components/NavBar'

export default function MiPerfil() {
	return (
		<Box>
			<NavBar title="Informacion de Perfil" />
			<Container maxWidth="lg">
				<Box p={3}>
					<Stack spacing={3}>
						<Stack direction={'row'} spacing={3}>
							<TextField
								label="Nombres"
								name="names"
								margin={'normal'}
								value={'Julio Cesar'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								fullWidth
							/>
							<TextField
								label="Apellidos"
								name="names"
								margin={'normal'}
								value={'Garcia Melgarejo'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								fullWidth
							/>
						</Stack>
						<Stack direction={'row'} spacing={3}>
							<TextField
								label="Correo Electronico"
								name="email"
								margin={'normal'}
								value={'julio@gmail.com'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								fullWidth
							/>
							<TextField
								label="Contraseña"
								type="password"
								name="password"
								margin={'normal'}
								value={'************'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								required
								fullWidth
							/>
						</Stack>
						<Stack direction={'row'} spacing={3}>
							<TextField
								label="Puesto"
								name="names"
								margin={'normal'}
								value={'Full Stack Developer'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								fullWidth
							/>
							<TextField
								label="DNI"
								name="dni"
								margin={'normal'}
								value={'12345678'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								fullWidth
							/>
						</Stack>
						<Stack>
							<TextField
								label="Salario"
								name="dni"
								margin={'normal'}
								value={'4500.00'}
								slotProps={{
									htmlInput: {
										readOnly: true,
									},
								}}
								fullWidth
							/>
						</Stack>
					</Stack>
					<Stack
						spacing={5}
						justifyContent={'center'}
						direction={'row'}
					>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
						>
							Upload files
							<input
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
							/>
						</Button>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
						>
							Upload files
							<input
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
							/>
						</Button>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
						>
							Upload files
							<input
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
							/>
						</Button>
					</Stack>
				</Box>
			</Container>
		</Box>
	)
}
