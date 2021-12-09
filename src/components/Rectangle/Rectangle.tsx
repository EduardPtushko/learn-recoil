import { Suspense } from 'react'
import { atomFamily, useRecoilState } from 'recoil'
import { selectedElementState } from '../../Canvas/Canvas'
import Drag from '../Drag'
import Resize from '../Resize'
import { RectangleContainer } from './RectangleContainer'
import { RectangleInner } from './RectangleInner'
import { RectangleLoading } from './RectangleLoading'

export const defaultStyle = {
	style: {
		position: { top: 0, left: 0 },
		size: { width: 50, height: 50 },
	},
}

export type ElementStyle = {
	position: { top: number; left: number }
	size: { width: number; height: number }
}

export type Element = {
	style: ElementStyle
	image?: { id: number; src: string }
}

export const elementState = atomFamily<Element, number>({
	key: 'element',
	default: defaultStyle,
})

type RectangleProps = {
	id: number
}

const Rectangle: React.FC<RectangleProps> = ({ id }) => {
	const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState)
	const [element, setElement] = useRecoilState(elementState(id))

	const selected = selectedElement === id

	return (
		<RectangleContainer
			position={element.style.position}
			size={element.style.size}
			onSelect={() => {
				setSelectedElement(id)
			}}
		>
			<Resize
				selected={selected}
				position={element.style.position}
				size={element.style.size}
				onResize={(style) => {
					setElement({
						...element,
						style,
					})
				}}
			>
				<Drag
					position={element.style.position}
					onDrag={(position: ElementStyle['position']) => {
						setElement({
							...element,
							style: {
								...element.style,
								position,
							},
						})
					}}
				>
					<div>
						<Suspense fallback={<RectangleLoading selected={selected} />}>
							<RectangleInner selected={selected} id={id} />
						</Suspense>
					</div>
				</Drag>
			</Resize>
		</RectangleContainer>
	)
}

export default Rectangle
