import React, { PropTypes } from "react"
import styled from "styled-components"

const Image = styled.img`
	padding: 0;
	backgroundColor: ${props.backgroundColor} || "white";
	border-radius: 2;
	height: ${props.height};
	width: ${props.width};
`

const SVG = styled.svg`
	stroke: ${props.stroke};
	fill: ${props.fill};
`

const Container = styled.div`
	margin: ${props.margin};
	padding: 0;
	height: ${props.height};
	width: ${props.width};
	margin-right: ${props.marginRight};
	margin-left: ${props.marginLeft};
`

const Tile = ({src}) => {
	const TAG = props.fill ? "SVG" : "Image"
	return <Container>
          <TAG src={ src } />
        </Container>
}

export { Tile }
