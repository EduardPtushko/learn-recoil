import styles from './Rectangle.module.css'

import { ElementStyle } from './Rectangle'

type RectangleContainerProps = {
	position: ElementStyle['position']
	size: ElementStyle['size']
	onSelect: () => void
}

export const RectangleContainer: React.FC<RectangleContainerProps> = ({
	children,
	size,
	position,
	onSelect,
}) => {
	return (
		<div
			className={styles.BoxContainer}
			style={{ ...size, ...position }}
			onMouseDown={() => onSelect()}
			onClick={(e) => e.stopPropagation()}
		>
			{children}
		</div>
	)
}
