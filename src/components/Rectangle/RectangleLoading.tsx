import { getBorderColor } from '../../util'
import Spinner from '../Spinner'
import styles from './Rectangle.module.css'

export const RectangleLoading = ({ selected }: { selected: boolean }) => {
	return (
		<div
			className={styles.LoadingBox}
			style={{
				border: `1px solid ${getBorderColor(selected)}`,
			}}
		>
			<div className={styles.InnerLoadingBox}>
				<Spinner size={38} thickness={3} />
			</div>
		</div>
	)
}
