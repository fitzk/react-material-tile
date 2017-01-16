import React from "react"
import "./../stylesheets/index.scss"

const TileCardGrid = props => {
	const direction = props.direction || "column"
	const wrap = props.wrap || "wrap-reverse"
	const grid = {
		width: props.width,
		height: props.height,
		display: "flex",
		flexDirection: direction,
		alignSelf: "center",
		flexGrow: 0,
		flexWrap: wrap,
		transitionDuration: "800ms!important",
		transitionProperty: "ease-in-out",
		transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
		transitionDelay: "0ms",
		alignItems: "center !important",
		wordWrap: "break-word",
		justifyContent: "space-around",
		padding: "10px"
	}
	return <div style={ grid }>
          { props.children }
        </div>
}
export { TileCardGrid }
