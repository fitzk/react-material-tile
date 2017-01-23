import React, { PropTypes } from "react"
import styled from "styled-components"

export const SVG = styled.svg`
	stroke: ${props => props.stroke};
	fill: ${props => props.fill};
`

export const Container = styled.div`
	margin: ${props => props.margin};
	padding: 0;
	height: ${props => props.height};
	width: ${props => props.width};
	padding: 0;
	border-radius: 2;
`

export const Image = styled.img`
	height: ${props => props.height};
	width: ${props => props.width};
	background-color: ${props => props.primary? props.theme.palette.primary1Color: props.custom};
`
