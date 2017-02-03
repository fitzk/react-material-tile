import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card, CardText, CardTile } from "material-ui"
import { Image, Wrapper, Title, Subtitle } from "./styled"

const CardHeader = ({
		avatar,
		src,
		style,
		title,
		subtitle,
		avatarWidth,
		avatarHeight,
		onClick,
		...props
	}) => {
	return <Wrapper row
                 onClick={ onClick }
                 style={ style }>
          <Wrapper column
                   width="auto">
            { avatar || <Image primary
                               width={ avatarWidth || "10vw" }
                               height={ avatarHeight || "auto" }
                               src={ src } /> }
          </Wrapper>
          <Wrapper column>
            <Title>
              { title }
            </Title>
            <Subtitle>
              { subtitle }
            </Subtitle>
          </Wrapper>
        </Wrapper>
}

const CardWrapper = ({
		children,
		avatar,
		name,
		src,
		cardStyle,
		cardHeaderStyle,
		cardHeaderTitleStyle,
		onClick,
		margin,
		cardWidth,
		cardHeight,
		tileWidth,
		tileHeight,
		...props
	}) => {
	let _defaultCardStyle = {
		width: `${cardWidth || "50vw"}`
	}
	return <Card key={ `parent-${name}` }
              {...props}
              style={ cardStyle || _defaultCardStyle }
              zDepth={ 0 }>
          <CardHeader avatar={ avatar }
                      onClick={ onClick }
                      height={ tileHeight }
                      style={ cardHeaderStyle }
                      src={ src }
                      {...props}/>
          <CardText {...props}>
            { children }
          </CardText>
        </Card>
}

export { CardWrapper as Card }
