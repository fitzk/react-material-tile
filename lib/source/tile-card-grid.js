import React from "react"
import "./../stylesheets/index.scss"

const TileCardGrid = props => {
	const direction = props.direction || "row"
	const wrap = props.wrap || "no-wrap"
	const alignment = props.alignment || "center"

	const grid = {
		width: props.width,
		height: props.height,
		display: "flex",
		flexDirection: direction,
		alignSelf: "center",
		flexGrow: 0,
		flexWrap: wrap,
		alignItems: alignment,
		wordWrap: "break-word",
		justifyContent: "space-around",
		padding: "10px",
		transition: "none"
	}
	return <div style={ grid }>
          { props.children }
        </div>
}

export { TileCardGrid }
