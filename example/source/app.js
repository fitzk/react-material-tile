import React, { Component } from "react"
import { AppBar, CardText, List, ListItem, CardActions, FlatButton } from "material-ui"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { ThemeProvider } from "styled-components"
import MaterialTile, { MaterialTileGrid } from "react-material-tile"
import logo from "./assets/js-yellow.png"

export class App extends Component {

	render() {

		return <div>
           <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
             <ThemeProvider theme={ lightBaseTheme }>
               <MaterialTileGrid row>
                 <MaterialTileGrid column>

                       <MaterialTile tileWidth="150px"
                                     tileHeight="150px"
                                     noImageInHeader
                                     title="Nested Card zDepth 0!"
                                     cardHeight="250px"
                                     subtitle="this is a subtitle"
                                     zDepth={ 0 }
                                     src={ logo }>
                         <CardActions>
                           <FlatButton label="Action1" />
                           <FlatButton label="Action2" />
                         </CardActions>
                       </MaterialTile>
                       <MaterialTile tileWidth="150px"
                                     tileHeight="150px"
                                     noImageInHeader
                                     title="Nested Card zDepth 2!"
                                     cardHeight="250px"
                                     cardWidth="400px"
                                     subtitle="this is a subtitle"
                                     zDepth={ 2 }
                                     src={ logo }>
                         <CardText>
                           some content...
                         </CardText>
                       </MaterialTile>
                     </MaterialTileGrid>
                   <MaterialTile tileWidth="150px"
                                 tileHeight="150px"
                                 title="No image in header"
                                 noImageInHeader
                                 src={ logo }>
                     <CardText></CardText>
                   </MaterialTile>
                   <MaterialTile tileWidth="150px"
                                 tileHeight="150px"
                                 title="Test"
                                 src={ logo }>
                     <CardText></CardText>
                   </MaterialTile>
               </MaterialTileGrid>
             </ThemeProvider>
           </MuiThemeProvider>
         </div>
	}
}
