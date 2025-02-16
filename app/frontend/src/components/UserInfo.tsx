'use client'
import { Employee } from '@/types/employee.type'
import { Stack, Box, Container, Button, TextField } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

interface IProps {
	data: Employee
}

const iFileStyle = {
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
}

export default function UserInfo({ data }: IProps) {
	return (
		<Container maxWidth="lg">
			<Box p={3}>
				<Stack spacing={3}>
					<Stack direction={'row'} spacing={3}>
						<TextField
							label="Nombres"
							name="names"
							margin={'normal'}
							value={data.first_name}
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
							value={data.last_name}
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
							value={data.email}
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
							value={data.employee?.job_title}
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
							value={data.employee?.salary}
							slotProps={{
								htmlInput: {
									readOnly: true,
								},
							}}
							fullWidth
						/>
					</Stack>
				</Stack>
				<Stack spacing={5} justifyContent={'center'} direction={'row'}>
					<Stack>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
							startIcon={<CloudUploadIcon />}
						>
							Subir Documento de Identidad
							<Box
								component={'input'}
								sx={iFileStyle}
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
								multiple
							/>
						</Button>
					</Stack>
					<Stack>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
							startIcon={<CloudUploadIcon />}
						>
							Upload files
							<Box
								component={'input'}
								sx={iFileStyle}
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
								multiple
							/>
						</Button>
					</Stack>
					<Stack>
						<Button
							component="label"
							role={undefined}
							variant="contained"
							tabIndex={-1}
							startIcon={<CloudUploadIcon />}
						>
							Upload files
							<Box
								component={'input'}
								sx={iFileStyle}
								type="file"
								onChange={(event) =>
									console.log(event.target.files)
								}
								multiple
							/>
						</Button>
					</Stack>
				</Stack>
			</Box>
		</Container>
	)
}
