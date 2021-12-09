import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil'
import { elementsState } from '../Canvas/Canvas'
import { defaultStyle, elementState } from '../components/Rectangle/Rectangle'
import ImageIcon from '../Icons/ImageIcon'
import SquareIcon from '../Icons/SquareIcon'
import { getRandomImage } from '../util'
import styles from './ToolBar.module.css'

const ToolBar: React.FC = () => {
	const elements = useRecoilValue(elementsState)
	const newId = elements.length

	const insertElement = useRecoilCallback(({ set }) => (type: 'image' | 'rectangle') => {
		set(elementsState, (elements) => [...elements, elements.length])

		if (type === 'image') {
			set(elementState(newId), {
				...defaultStyle,
				image: getRandomImage(),
			})
		}
	})

	return (
		<div className={styles.VStack}>
			<button>
				<SquareIcon
					onClick={() => {
						insertElement('rectangle')
					}}
				/>
			</button>
			<button>
				<ImageIcon
					onClick={() => {
						insertElement('image')
					}}
				/>
			</button>
		</div>
	)
}

export default ToolBar
