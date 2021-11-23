import styles from './Rectangle.module.css'
import { getBorderColor } from '../../util'

export const RectangleInner = ({ selected }: { selected: boolean }) => {
	return (
		<div
			className={styles.Box}
			style={{
				border: `1px solid ${getBorderColor(selected)}`,
			}}
		>
			<div className={styles.BoxInner} />
		</div>
	)
}
