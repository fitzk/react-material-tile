import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card } from "material-ui"
import { CardHeader } from "./card-header"

const CardWrapper = ({
		children,
		avatar,
		noImageInHeader,
		name,
		src,
		title,
		subtitle,
		cardStyle,
		cardHeaderStyle,
		cardHeaderTitleStyle,
		onClick,
		cardWidth,
		cardHeight,
		tileWidth,
		tileHeight,
		...props
	}) => {

	let _defaultCardStyle = {
		width: `${cardWidth || "50vw"}`,
		height: `${cardHeight || "50vh"}`
	}

	return <Card key={ `parent-${name}` }
              {...props}
              style={ cardStyle || _defaultCardStyle }
              zDepth={ 0 }>
          <CardHeader avatar={ avatar }
                      onClick={ onClick }
                      title={ title }
                      subtitle={ subtitle }
                      noImageInHeader={ noImageInHeader }
                      style={ cardHeaderStyle }
                      src={ src }
                      {...props}/>
          { React.cloneElement(children, ...props) }
        </Card>
}

export { CardWrapper as Card }
