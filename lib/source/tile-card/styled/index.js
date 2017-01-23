import React, { PropTypes } from "react"
import styled from "styled-components"

export const SVG = styled.svg`
	stroke: ${props => props.stroke};
	fill: ${props => props.fill};
`

export const Container = styled.div`
	margin: ${props => props.margin};
	height: ${props => props.height};
	width: ${props => props.width};
	padding: 0!important;
`

export const Image = styled.img`
	margin: ${props => props.margin};
	height: ${props => props.height};
	width: ${props => props.width};
	background-color: ${props => props.primary? props.theme.palette.primary1Color: props.custom};
`
export const Grid = styled.div`
	display: flex;
	align-self: center;
	width: ${props => props.width};
	height: ${props => props.height};
	flex-direction: ${props => props.direction || "row"};
	flex-wrap: ${props => props.wrap || "no-wrap"};
	align-items: ${props => props.alignment || "center"};
	justifyContent: ${props => props.justification || "space-around"};
`
