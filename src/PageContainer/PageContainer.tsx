import styles from './PageContainer.module.css'

type PageContainerProps = {
	onClick: () => void
}
const PageContainer: React.FC<PageContainerProps> = ({ onClick, children }) => {
	return (
		<div className={styles.Flex} onClick={onClick}>
			<div className={styles.Box}>{children}</div>
		</div>
	)
}

export default PageContainer
