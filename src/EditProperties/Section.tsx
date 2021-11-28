import styles from './EditProperties.module.css'

export const Section: React.FC<{ heading: string }> = ({ heading, children }) => {
	return (
		<div className={styles.sectionWrapper}>
			<p>{heading}</p>
			{children}
		</div>
	)
}
