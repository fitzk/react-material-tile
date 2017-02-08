import React, { PropTypes } from "react"
import styled from "styled-components"
import { Display } from "styled-flex"

export const Container = styled.div`
	margin: ${props => props.margin};
	height: ${props => props.height};
	width: ${props => props.width};
	padding: 0!important;
`
export const Grid = styled(Display)`
	align-self: center;
	width: ${props => props.width};
	height: ${props => props.height};
`
export const Image = styled.img`
	margin: ${props => props.margin};
	height: ${props => props.height};
	width: ${props => props.width};
`
