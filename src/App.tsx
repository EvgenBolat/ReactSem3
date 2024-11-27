import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	useColorScheme,
} from '@mui/material'
import './App.scss'
import Header from './Containers/Header/Header'
import MainContent from './Containers/MainContent/MainContent'

function MyApp() {
	const { mode, setMode } = useColorScheme()
	if (!mode) return null
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header mode={mode} setMode={setMode} />
      <MainContent />
		</ThemeProvider>
	)
}

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
})

export default function ToggleColorMode() {
	return (
		<ThemeProvider theme={theme}>
			<MyApp />
		</ThemeProvider>
	)
}
