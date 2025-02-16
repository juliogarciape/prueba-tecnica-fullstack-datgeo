'use client'
import { Stack, Button, Box, Container, Typography } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import LoginIcon from '@mui/icons-material/Login'
import { loginFormDefaults } from '@/config/defaultValues'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/config/constants'
import Cookies from 'js-cookie'

export default function LoginForm() {
	const router = useRouter()

	return (
		<Box
			sx={{
				backgroundImage:
					"linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/banner-login-unsplash.jpg')",

				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
		>
			<Container maxWidth="sm">
				<Box p={3} textAlign="center">
					<FormContainer
						defaultValues={loginFormDefaults}
						onSuccess={async (data) => {
							const query = await fetch(API_URL + '/auth/login', {
								method: 'POST',
								body: JSON.stringify(data),
								headers: {
									'Content-Type': 'application/json',
								},
							})
							const res = await query.json()

							if (res.error) {
								alert(res.message)
							} else {
								Cookies.set('access_token', res.access_token)
								router.push('auth')
							}
						}}
					>
						<Stack spacing={3}>
							<Typography
								variant="h4"
								fontFamily={'Inter'}
								color="textPrimary"
								fontWeight={'bold'}
								lineHeight={1.5}
								gutterBottom
							>
								Recursos Humanos - Sistema de Empleados
							</Typography>
							<TextFieldElement
								label="Correo Electronico"
								name="email"
								margin={'normal'}
								required
							/>
							<TextFieldElement
								label="Contraseña"
								type="password"
								name="password"
								margin={'normal'}
								required
							/>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								type={'submit'}
								endIcon={<LoginIcon />}
							>
								Iniciar Sesión
							</Button>
						</Stack>
					</FormContainer>
				</Box>
			</Container>
		</Box>
	)
}
