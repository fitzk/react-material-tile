import React, { propTypes } from "react"
import cn from "classnames"
import styles from "./../stylesheets/index.css"

const TileCardGrid = ({className, width, height, direction, alignment, wrap, justification, ...props}) => {

	const dynamicStyle = {
		width: width,
		height: height,
		flexDirection: direction || "row",
		flexWrap: wrap || "no-wrap",
		alignItems: alignment || "center",
		justifyContent: justification || "space-around"
	}
	return <div style={ dynamicStyle }
             className={ cn(className, styles.grid) }>
          { props.children }
        </div>
}

export { TileCardGrid }
