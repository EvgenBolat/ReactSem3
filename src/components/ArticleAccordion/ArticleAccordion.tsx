import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { FC } from 'react'
import { Article } from '../../typification/Article.type'
import './ArticleAccordion.scss'
interface ArticleAccordionInterface {
	article: Article
	isOdd: boolean
}
const ArticleAccordion: FC<ArticleAccordionInterface> = ({
	article,
	isOdd,
}) => {
	return (
		<Accordion
			className='articleAccordion'
			sx={[
				theme => ({
					backgroundColor: !isOdd ? 'lightblue' : 'black',
					color: !isOdd ? 'black' : 'white',
					...theme.applyStyles("dark", {
						backgroundColor: !isOdd ? 'lightblue' : 'white',
						color: !isOdd ? 'black' : 'black',
					}),
				}),
			]}
		>
			<AccordionSummary>{article.name}</AccordionSummary>
			<AccordionDetails className='articleContent'>
				{article.content}
			</AccordionDetails>
		</Accordion>
	)
}

export default ArticleAccordion
