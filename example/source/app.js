import React, { Component } from "react"
import { AppBar, CardText, List, ListItem, CardActions, FlatButton } from "material-ui"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { ThemeProvider } from "styled-components"
import MaterialTile, { MaterialTileGrid } from "./../../lib/source"
import logo from "./assets/js-yellow.png"
import { Row } from "styled-flex"

export class App extends Component {

	render() {

		return <div>
           <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
             <ThemeProvider theme={ lightBaseTheme }>
               <MaterialTileGrid row wrap>
                 <MaterialTileGrid column wrap>
                       <MaterialTile tileWidth="250px"
                                     tileHeight="250px"
																		 tileStyle={{ margin: "8px", paddingTop: "12px" }}
                                     noImageInHeader
                                     title="Card!"
                                     cardHeight="100%"
																		 cardWidth="80vw"
																		 cardStyle={{ margin: "16px" }}
                                     subtitle="this is a subtitle"
                                     zDepth={ 1 }
                                     src={ logo }>
																	 			<div>
									                         <CardActions>
									                           <FlatButton label="Action1" />
									                           <FlatButton label="Action2" />
									                         </CardActions>
																							 <MaterialTileGrid row>
													                       <MaterialTile tileWidth="150px"
													                                     tileHeight="150px"
													                                     noImageInHeader
													                                     title="Card zDepth 0!"
													                                     cardHeight="250px"
													                                     cardWidth="500px!important"
													                                     subtitle="this is a subtitle"
													                                     zDepth={ 0 }
													                                     src={ logo }>
													                         <CardText>
													                           some content...
													                         </CardText>
													                       </MaterialTile>
																					 </MaterialTileGrid>
																			 </div>
											</MaterialTile>
											<Row/>
                     </MaterialTileGrid>
                   <MaterialTile tileWidth="150px"
                                 tileHeight="150px"
																 tileStyle={{ margin: "8px" }}
                                 title="No image in header"
                                 noImageInHeader
																 cardHeight="100%"
																 cardWidth="80vw"
																 cardStyle={{ margin: "16px" }}
                                 src={ logo }>
                     <CardText style={{overflow: "auto"}}>
											 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec venenatis ipsum. Integer luctus enim et erat iaculis commodo. Maecenas iaculis consequat est, fringilla condimentum nibh elementum id. Suspendisse potenti. Aliquam nunc risus, dignissim sed imperdiet ut, efficitur a metus. Sed sit amet eleifend lectus. Curabitur eget est at ante pretium rhoncus. In convallis rhoncus quam, a efficitur metus laoreet ac. Curabitur non eros sit amet ipsum rhoncus gravida nec at ipsum. Proin porta nunc massa, ac ullamcorper mi congue eu. Nullam lobortis, turpis non vehicula ullamcorper, orci augue placerat lectus, eget convallis quam risus vel diam. Quisque pulvinar sagittis quam, ut blandit libero convallis vitae.
										 </CardText>
                   </MaterialTile>
                   <MaterialTile tileWidth="150px"
                                 tileHeight="150px"
																 tileStyle={{ margin: "8px" }}
																 cardHeight="100%"
																 cardWidth="80vw"
																 cardStyle={{ margin: "16px" }}
                                 title="Image in header"
                                 src={ logo }>
                     <CardText>
											 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec venenatis ipsum. Integer luctus enim et erat iaculis commodo. Maecenas iaculis consequat est, fringilla condimentum nibh elementum id. Suspendisse potenti. Aliquam nunc risus, dignissim sed imperdiet ut, efficitur a metus. Sed sit amet eleifend lectus. Curabitur eget est at ante pretium rhoncus. In convallis rhoncus quam, a efficitur metus laoreet ac. Curabitur non eros sit amet ipsum rhoncus gravida nec at ipsum. Proin porta nunc massa, ac ullamcorper mi congue eu. Nullam lobortis, turpis non vehicula ullamcorper, orci augue placerat lectus, eget convallis quam risus vel diam. Quisque pulvinar sagittis quam, ut blandit libero convallis vitae.
										 </CardText>
                   </MaterialTile>
               </MaterialTileGrid>
             </ThemeProvider>
           </MuiThemeProvider>
         </div>
	}
}
