import React, { PropTypes } from "react"
import styled from "styled-components"
import { Display } from "./flex"
export { Display, Row, Column } from "./flex"

export const Container = styled.div`
	margin: ${props => props.margin};
	height: ${props => props.height};
	width: ${props => props.width};
	padding: 0!important;
`
