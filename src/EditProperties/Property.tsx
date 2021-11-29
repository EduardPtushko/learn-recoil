import { useRecoilState } from 'recoil'
import { editPropertiesState } from './EditProperties'
import styles from './EditProperties.module.css'

export const Property = ({ label, path, id }: { label: string; path: string; id: number }) => {
	const [value, setValue] = useRecoilState(editPropertiesState({ path, id }))

	if (value === null) return null

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
					onChange={(e) => setValue(parseFloat(e.target.value))}
				/>

				<div className={styles.propertyRightElement}>px</div>
			</div>
		</div>
	)
}
