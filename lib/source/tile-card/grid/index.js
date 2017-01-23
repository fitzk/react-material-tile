import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card, CardHeader, CardText, CardTile, Avatar } from "material-ui"
import { Grid } from "./../styled"

const Div = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
`
const TileCardGrid = props => {
	return <Div>
          <Grid {...props}>
            { props.children }
          </Grid>
        </Div>
}

export { TileCardGrid }
