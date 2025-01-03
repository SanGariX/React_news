import styles from "./image.module.css"
const Image = ({ image }) => {

	return (
		<div className={styles.wrapper}>
			{!!image && <img src={image} alt='News' className={styles.image} />}
		</div>
	)
}

export default Image
