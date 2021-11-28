import styles from './EditProperties.module.css'

export const Card: React.FC = ({ children }) => (
	<div className={styles.cardWrapper} onClick={(e) => e.stopPropagation()}>
		{children}
	</div>
)
