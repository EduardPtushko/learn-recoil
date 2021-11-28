import React, { createContext, useState } from 'react'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Rectangle from '../components/Rectangle'
import { Element } from '../components/Rectangle/Rectangle'
import EditProperties from '../EditProperties'
import PageContainer from '../PageContainer'
import ToolBar from '../ToolBar'

export type SetElement = (indexToSet: number, newElement: Element) => void

export const selectedElementState = atom<null | number>({
	key: 'selectedElement',
	default: null,
})

export const elementsState = atom<number[]>({
	key: 'elements',
	default: [],
})

const Canvas: React.FC = () => {
	const elements = useRecoilValue(elementsState)
	const setSelectedElement = useSetRecoilState(selectedElementState)

	return (
		<PageContainer
			onClick={() => {
				setSelectedElement(null)
			}}
		>
			<ToolBar />
			<EditProperties />
			{elements.map((id) => (
				<Rectangle key={id} id={id} />
			))}
		</PageContainer>
	)
}

export default Canvas
