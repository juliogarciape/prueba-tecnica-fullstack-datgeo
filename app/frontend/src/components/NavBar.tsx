'use client'
import { Box, Typography, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import LogoutIcon from '@mui/icons-material/Logout'
import Cookies from 'js-cookie'
interface IProps {
	title: string
}

export default function NavBar({ title }: IProps) {
	const handleLogout = () => {
		Cookies.remove('access_token')
		window.location.href = '/'
	}

	return (
		<Box sx={{ flexGrow: 1, marginBottom: 4 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						fontWeight={'bold'}
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						{title}
					</Typography>
					<Button
						color="inherit"
						onClick={handleLogout}
						endIcon={<LogoutIcon />}
					>
						Cerrar Sesion
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
