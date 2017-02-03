import React, { Component } from "react";
import { AppBar } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { ThemeProvider } from "styled-components"
import TileCard, { TileCardGrid } from "./../source/tile-card"
import logo from "./../test/logo.png"

export class App extends Component {

	render() {

		const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <ThemeProvider theme={ darkBaseTheme }>
               <TileCardGrid column>
                 <TileCard tileWidth="150px"
                           tileHeight="150px"
                           title="Test"
                           subtitle="this is a subtitle"
                           src={ logo }>
                   <div></div>
                 </TileCard>
                 <TileCard tileWidth="150px"
                           tileHeight="150px"
                           noImageInHeader
                           title="Test"
                           subtitle="this is a subtitle"
                           src={ logo }>
                   <div></div>
                 </TileCard>
                 <TileCard tileWidth="150px"
                           tileHeight="150px"
                           title="Test"
                           src={ logo }>
                   <div></div>
                 </TileCard>
               </TileCardGrid>
             </ThemeProvider>
           </MuiThemeProvider>
         </div>
	}
}
