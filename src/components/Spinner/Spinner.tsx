import React from 'react'
import styles from './Spinner.module.css'

type SpinnerProps = {
	size?: number
	thickness?: number
	color?: string
}

const Spinner: React.FC<SpinnerProps> = ({ size = 80, thickness = 6, color = 'gray' }) => {
	return (
		<div
			style={
				{
					'--color': color,
					'--size': `${size}px`,
					'--thickness': `${thickness}px`,
				} as React.CSSProperties
			}
			className={styles.DualRing}
		></div>
	)
}

export default Spinner
