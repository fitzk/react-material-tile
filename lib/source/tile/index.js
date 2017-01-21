import React, { PropTypes } from "react"
import styled from "styled-components"
import ReactDOM from "react-dom"

const Image = styled.img`
	height: ${props => props.height};
	width: ${props => props.width};
	background-color: ${props => props.theme.palette.primary1Color};
`
const SVG = styled.svg`
	stroke: ${props => props.stroke};
	fill: ${props => props.fill};
`

const Container = styled.div`
	margin: ${props => props.margin};
	padding: 0;
	height: ${props => props.height};
	width: ${props => props.width};
	padding: 0;
	border-radius: 2;
`

const Tile = (props, context) => {

	const TAG = props.svg ? <SVG {...props}/> : <Image {...props}
                                                    src={ props.src } />
	return <Container {...props}>
          { TAG }
        </Container>

}

export { Tile }
