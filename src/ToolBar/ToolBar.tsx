import { useContext } from 'react'
import { useSetRecoilState } from 'recoil'
import { elementsState } from '../Canvas/Canvas'
import SquareIcon from '../Icons/SquareIcon'
import styles from './ToolBar.module.css'

const ToolBar: React.FC = () => {
	const setElements = useSetRecoilState(elementsState)

	return (
		<div className={styles.VStack}>
			<button>
				<SquareIcon
					onClick={() => {
						setElements((elements) => [...elements, elements.length])
					}}
				/>
			</button>
		</div>
	)
}

export default ToolBar
