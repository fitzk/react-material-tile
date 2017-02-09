
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
	titleStyle,
	subtitleStyle,
	tileStyle,
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


  let mergeStyles = (style, width, height )=> {
		if(!style) {
			return { width: width, height: height }
		} else {

			let keys = Object.keys(style);
			let hasWidth = keys.includes("width");
			let hasHeight = keys.includes("height");

			if ( hasWidth && !hasHeight ) {
				return Object.assign({}, style, { width: width } )
			}
			else if( !hasWidth && hasHeight ) {
				return Object.assign({}, style, { height: height } )
			}
			else  if( !hasWidth && !hasHeight ) {
				style.height = height
				style.width = width
				return style
			}
		}
	}

	const width = `${cardWidth || "50vw"}`;
	const height = `${cardHeight || "50vh"}`;
	let s = mergeStyles(cardStyle, width, height);

	return <Card key={ `${ name || Math.random()}` }
							name={ name }
              {...props}
              containerStyle={ s }>
          <CardHeader avatar={ avatar }
                      onClick={ onClick }
                      title={ title }
                      subtitle={ subtitle }
											titleStyle={ titleStyle }
											subtitleStyle={ subtitleStyle }
                      noImageInHeader={ noImageInHeader }
                      style={ cardHeaderStyle }
                      src={ src }
                      { ...props }/>
          { React.cloneElement(children, ...props) }
        </Card>
}

export { CardWrapper as Card }
