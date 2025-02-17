'use client'
import { Employee } from '@/types/employee.type'
import { Stack, Box, Container, Button, TextField } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useEffect, useState } from 'react'
import { BUCKET_URL } from '@/config/constants'
import PDFViewer from './PdfViewer'

interface IProps {
	data: Employee
	documents: any
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

export default function UserInfo({ data, documents }: IProps) {
	const [docs, setDocuments] = useState({
		identityDocument: '',
		driverLicense: '',
		curriculumVitae: '',
	})

	useEffect(() => {
		documents.map((doc) => {
			if (doc.documentType.name === 'Licencia de Conducir') {
				setDocuments((prev) => ({
					...prev,
					driverLicense: BUCKET_URL + doc.file_path,
				}))
			}

			if (doc.documentType.name === 'Curriculum Vitae') {
				setDocuments((prev) => ({
					...prev,
					curriculumVitae: BUCKET_URL + doc.file_path,
				}))
			}

			if (doc.documentType.name === 'Documento de Identidad') {
				setDocuments((prev) => ({
					...prev,
					identityDocument: BUCKET_URL + doc.file_path,
				}))
			}
		})
	}, [documents])

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
				<Stack
					marginTop={5}
					marginBottom={5}
					spacing={5}
					justifyContent={'center'}
					direction={'row'}
				>
					<Stack flex={1}>
						{docs.identityDocument !== '' ? (
							<PDFViewer fileUrl={docs.identityDocument} />
						) : (
							<Button
								component="label"
								role={undefined}
								variant="contained"
								tabIndex={-1}
								startIcon={<CloudUploadIcon />}
							>
								Documento de Identidad (.pdf)
								<Box
									component={'input'}
									accept="application/pdf"
									sx={iFileStyle}
									type="file"
								/>
							</Button>
						)}
					</Stack>
					<Stack flex={1}>
						{docs.driverLicense !== '' ? (
							<PDFViewer fileUrl={docs.driverLicense} />
						) : (
							<Button
								component="label"
								role={undefined}
								variant="contained"
								tabIndex={-1}
								startIcon={<CloudUploadIcon />}
							>
								Licencia de Conducir (.pdf)
								<Box
									component={'input'}
									accept="application/pdf"
									sx={iFileStyle}
									type="file"
									onChange={(event) =>
										console.log(event.target.files)
									}
								/>
							</Button>
						)}
					</Stack>
					<Stack flex={1}>
						{docs.curriculumVitae !== '' ? (
							<PDFViewer fileUrl={docs.curriculumVitae} />
						) : (
							<Button
								component="label"
								role={undefined}
								variant="contained"
								tabIndex={-1}
								startIcon={<CloudUploadIcon />}
							>
								Licencia de Conducir (.pdf)
								<Box
									component={'input'}
									accept="application/pdf"
									sx={iFileStyle}
									type="file"
									onChange={(event) =>
										console.log(event.target.files)
									}
								/>
							</Button>
						)}
					</Stack>
				</Stack>
			</Box>
		</Container>
	)
}
