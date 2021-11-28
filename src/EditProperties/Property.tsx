import styles from './EditProperties.module.css'

export const Property = ({
	label,
	value,
	onChange,
}: {
	label: string
	value: number
	onChange: (value: number) => void
}) => {
	return (
		<div className={styles.property}>
			<p className={styles.propertyLabel}>{label}</p>
			<div className={styles.propertyNumberInput}>
				<input
					inputMode="decimal"
					type="text"
					pattern="[0-9]*(.[0-9]+)?"
					autoComplete="off"
					autoCorrect="off"
					className={styles.propertyInput}
					value={value}
					onChange={(e) => onChange(parseFloat(e.target.value))}
				/>

				<div className={styles.propertyRightElement}>px</div>
			</div>
		</div>
	)
}
