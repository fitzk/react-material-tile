import React, { PropTypes } from "react"
import styled from "styled-components"

export const Image = styled.img`
	margin: ${props => props.margin};
	height: ${props => props.height};
	width: ${props => props.width};
	background-color: ${props => props.primary? props.theme.palette.primary1Color: props.custom};
`
export const Card = styled.div`
	width: ${props => props.cardWidth || "40vw"}
`
export const Title = styled.div`
	font-size:${props => props.fontSize || "5rem"};
	padding: 0;
	margin: 0;
	color: ${props => props.theme.palette.secondaryTextColor}
`
export const Subtitle = styled.h5`
	padding: 0;
	margin: 0;
	color: ${props => props.theme.palette.secondaryTextColor}
`
export const Wrapper = styled.div`
	padding: .5em;
	display: flex;
	width: ${props=>props.width};
	flex-direction: ${props => props.column && "column" || props.row && "row"};
	background-color: ${props => props.bgc}
`
