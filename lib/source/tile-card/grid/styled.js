import React, { PropTypes } from "react"
import styled from "styled-components"

export const Grid = styled(Display)`
	align-self: center;
	width: ${props => props.width};
	height: ${props => props.height};
`
