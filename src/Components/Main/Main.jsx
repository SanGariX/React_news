import { useEffect, useState } from 'react'
// import { formatDate } from '../../helpers/formatDate'
import News_Banner from '../News_Banner/News_Banner'
import styles from './main.module.css'
import { getNews } from '../../api/Api_News'
const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (err) {
				console.log(err)
			}
		}
		fetchNews()
	}, [])

	return (
		<>
			<main className={styles.main}>
				{!!news.length && <News_Banner item={news[0]}/>}
				{/* <h1 className={styles.title}>News Reactify</h1>
				<p className={styles.date}>{formatDate(new Date())}</p> */}
			</main>
		</>
	)
}

export default Main
