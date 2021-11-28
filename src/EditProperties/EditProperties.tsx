import { atom, selector, useRecoilState } from 'recoil'
import { Card } from './Card'
import { Property } from './Property'
import { Section } from './Section'
import { Element, elementState } from '../components/Rectangle/Rectangle'
import { selectedElementState } from '../Canvas/Canvas'

export const selectedElementProperties = selector<Element | undefined>({
	key: 'selectedElementProperty',
	get: ({ get }) => {
		const selectedElementId = get(selectedElementState)

		if (selectedElementId === null) return

		return get(elementState(selectedElementId))
	},
	set: ({ get, set }, newValue) => {
		const selectedElementId = get(selectedElementState)
		if (selectedElementId === null) return
		if (!newValue) return

		set(elementState(selectedElementId), newValue)
	},
})

export const EditProperties = () => {
	const [element, setElement] = useRecoilState(selectedElementProperties)

	if (!element) return null

	const setPosition = (property: 'top' | 'left', value: number) => {
		setElement({
			...element,
			style: {
				...element.style,
				position: {
					...element.style.position,
					[property]: value,
				},
			},
		})
	}
	const setSize = (property: 'width' | 'height', value: number) => {
		setElement({
			...element,
			style: {
				...element.style,
				size: {
					...element.style.size,
					[property]: value,
				},
			},
		})
	}

	return (
		<Card>
			<Section heading="Position">
				<Property
					label="Top"
					value={element.style.position.top}
					onChange={(top) => {
						setPosition('top', top)
					}}
				/>
				<Property
					label="Left"
					value={element.style.position.left}
					onChange={(left) => {
						setPosition('left', left)
					}}
				/>
			</Section>
			<Section heading="Size">
				<Property
					label="Width"
					value={element.style.size.width}
					onChange={(width) => {
						setSize('width', width)
					}}
				/>
				<Property
					label="Height"
					value={element.style.size.height}
					onChange={(height) => {
						setSize('height', height)
					}}
				/>
			</Section>
		</Card>
	)
}

export default EditProperties
