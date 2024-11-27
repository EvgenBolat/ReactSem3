import { FC, useState } from 'react'
import ArticleList from '../ArticleList/ArticleList'
import { ARTICLE_TEST_LIST } from '../../testValues/ArticleTestList'
import { FormGroup, FormLabel } from '@mui/material'
import './MainContent.scss'
const MainComponent: FC = () => {
	const [gap, setGap] = useState(0)

	function setCorrectGap(gap: number) {
		if (gap > 15) {
			setGap(15)
			return
		}
		if (gap < 0) {
			setGap(0)
			return
		}
		setGap(gap)
	}
	return (
		<main className='mainContent'>
			<FormGroup className='gapForm'>
				<FormLabel component='legend'>Gap</FormLabel>
				<input
					className='gapInput'
					type='number'
					value={gap}
					onChange={e => setCorrectGap(Number(e.target.value))}
				/>
			</FormGroup>
			<ArticleList articles={ARTICLE_TEST_LIST} gap={gap} />
		</main>
	)
}

export default MainComponent
