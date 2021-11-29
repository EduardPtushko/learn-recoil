import { selector, selectorFamily, useRecoilState, useRecoilValue } from 'recoil'
import { Card } from './Card'
import { Property } from './Property'
import { Section } from './Section'
import { elementState } from '../components/Rectangle/Rectangle'
import { selectedElementState } from '../Canvas/Canvas'
import { get as _get, set as _set } from 'lodash'
import produce from 'immer'

export const editPropertiesState = selectorFamily<number, { path: string; id: number }>({
	key: 'editProperties',
	get:
		({ path, id }) =>
		({ get }) => {
			const element = get(elementState(id))

			return _get(element, path)
		},

	set:
		({ path, id }) =>
		({ get, set }, newValue) => {
			const element = get(elementState(id))

			const newElement = produce(element, (draft) => {
				_set(draft, path, newValue)
			})

			set(elementState(id), newElement)
		},
})

export const EditProperties = () => {
	const selectedElement = useRecoilValue(selectedElementState)

	if (selectedElement === null) return null

	return (
		<Card>
			<Section heading="Position">
				<Property label="Top" path="style.position.top" id={selectedElement} />
				<Property label="Left" path="style.position.left" id={selectedElement} />
			</Section>
			<Section heading="Size">
				<Property label="Width" path="style.size.width" id={selectedElement} />
				<Property label="Height" path="style.size.height" id={selectedElement} />
			</Section>
		</Card>
	)
}

export default EditProperties
