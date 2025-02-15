'use client'
import { Stack, Button, Box, Container, Typography } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import LoginIcon from '@mui/icons-material/Login'
import { loginFormDefaults } from '@/config/defaultValues'

export default function LoginForm() {
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
						onSuccess={(data) => console.log(data)}
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
