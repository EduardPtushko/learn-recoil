function SquareIcon(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="transparent"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="prefix__feather prefix__feather-square"
			{...props}
		>
			<rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
		</svg>
	)
}

export default SquareIcon
