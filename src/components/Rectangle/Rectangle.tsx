import { atomFamily, useRecoilState, useSetRecoilState } from 'recoil'
import { selectedElementState } from '../../Canvas/Canvas'
import Drag from '../Drag'
import { RectangleContainer } from './RectangleContainer'
import { RectangleInner } from './RectangleInner'

export type ElementStyle = {
	position: { top: number; left: number }
	size: { width: number; height: number }
}

export type Element = { style: ElementStyle }

export const elementState = atomFamily<Element, number>({
	key: 'element',
	default: {
		style: {
			position: { top: 0, left: 0 },
			size: { width: 50, height: 50 },
		},
	},
})

type RectangleProps = {
	id: number
}

const Rectangle: React.FC<RectangleProps> = ({ id }) => {
	const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState)
	const [element, setElement] = useRecoilState(elementState(id))

	return (
		<Drag
			position={element.style.position}
			onDrag={(position: ElementStyle['position']) => {
				setElement({
					style: {
						...element.style,
						position,
					},
				})
			}}
		>
			<div>
				<RectangleContainer
					position={element.style.position}
					size={element.style.size}
					onSelect={() => {
						setSelectedElement(id)
					}}
				>
					<RectangleInner selected={id === selectedElement} />
				</RectangleContainer>
			</div>
		</Drag>
	)
}

export default Rectangle
