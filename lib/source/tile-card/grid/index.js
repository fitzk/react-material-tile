import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card, CardHeader, CardText, CardTile, Avatar } from "material-ui"
import { Grid } from "./../styled"

const TileCardGrid = props => {
	return <Grid {...props}>
          { props.children }
        </Grid>
}

export { TileCardGrid }
