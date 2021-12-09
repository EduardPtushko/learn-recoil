import styles from './Rectangle.module.css'
import { getBorderColor, getImageDimensions } from '../../util'
import { selectorFamily, useRecoilValue, useSetRecoilState } from 'recoil'
import { elementState } from './Rectangle'
import { editPropertiesState } from '../../EditProperties/EditProperties'
import { useEffect } from 'react'

const imgSelector = selectorFamily({
	key: 'image',
	get: (src: string | undefined) => () => {
		if (!src) return
		return getImageDimensions(src)
	},
})

export const RectangleInner = ({ selected, id }: { selected: boolean; id: number }) => {
	const element = useRecoilValue(elementState(id))
	const imageSize = useRecoilValue(imgSelector(element.image?.src))
	const setSize = useSetRecoilState(
		editPropertiesState({
			path: 'style.size',
			id,
		}),
	)

	useEffect(() => {
		if (!imageSize) return

		setSize(imageSize)
	}, [imageSize])

	return (
		<div
			className={styles.Box}
			style={{
				border: `1px solid ${getBorderColor(selected)}`,
			}}
		>
			<div
				className={styles.BoxInner}
				style={{
					backgroundImage: `url('${element.image?.src})`,
				}}
			/>
		</div>
	)
}
