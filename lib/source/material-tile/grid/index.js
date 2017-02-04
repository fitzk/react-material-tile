import React, { PropTypes } from "react"
import { Grid } from "./../components"

const MaterialTileGrid = props => {
	return <Grid {...props}>
          { props.children }
        </Grid>
}
export { MaterialTileGrid }
