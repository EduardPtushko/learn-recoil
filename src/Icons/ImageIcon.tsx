import { SVGProps } from 'react'

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-image"
		{...props}
	>
		<rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
		<circle cx={8.5} cy={8.5} r={1.5} />
		<path d="m21 15-5-5L5 21" />
	</svg>
)

export default ImageIcon