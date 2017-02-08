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

	let _cardStyle =  cardStyle || {
			width: `${cardWidth || "50vw"}`,
		height: `${cardHeight || "50vh"}`
	};

	return <Card key={ `${ name || Math.random()}` }
							name={ name }
              {...props}
              style={ _cardStyle }>
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
