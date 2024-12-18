import { Stack } from '@mui/material'
import React, { FC } from 'react'
import { Article } from '../../Typification/Article.type'
import ArticleAccordion from '../../components/ArticleAccordion/ArticleAccordion'
interface ArticleListInterface {
	articles: Article[]
	gap: number
}
const ArticleList: FC<ArticleListInterface> = React.memo(
	({ articles, gap }) => {
		return (
			<>
				<Stack
					sx={{
						width: '95%',
						margin: '0 auto',
					}}
					spacing={gap}
				>
					{articles.map((article, index) => (
						<ArticleAccordion article={article} isOdd={index % 2 === 0} />
					))}
				</Stack>
			</>
		)
	}
)

export default ArticleList
