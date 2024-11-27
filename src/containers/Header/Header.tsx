import { FormGroup, FormLabel, Switch } from '@mui/material'
import { FC } from 'react'
import './Header.scss'

interface HeaderInterface {
	mode: "light" | "dark" | "system" | undefined,
	setMode: (mode: "light" | "dark" | "system" | null) => void
}
const Header: FC<HeaderInterface> = ({ mode, setMode }) => {
	return (
		<header className='appHeader'>
			<FormGroup sx={
        {
          display: 'flex',
          alignItems: 'center'
        }
      }>
				<FormLabel component='legend'>Dark mode switch</FormLabel>
				<Switch  onChange={() => setMode(mode === "dark" ? "light" : "dark")} />
			</FormGroup>
		</header>
	)
}

export default Header
