## React Material Tile

🚧 This project is a work in progress, components are subject to change. 

React Material Tile components were created to make Material Grid layouts easier. 
These components were designed for use with [React Material UI](https://github.com/callemall/material-ui),
but they also work well by themselves with a few adjustments.

### NPM
```
npm install --save react-material-tile
```
### Components

#### MaterialTile
Displays an image, which transforms into a React Material UI card on click. Tile / card behavior is handled by default.

##### Usage
```
import MaterialTile from "react-material-tile"
...

	<MaterialTile src={ image.png }
		      title="React Tile Card"
		      noImageInHeader 	// don't show image in card header
		      tileWidth="250px"
		      tileHeight="250px"
		      zDepth={ 0 } 	// pass in Material UI props to card
		      cardStyle={{ border: "1px solid black" }}>
		<CardText>
			Content here
		</CardText>
	</MaterialTile>
```

##### Options

| prop name       | type | optional/required | description  |
| :------------- |:---------| :--------|:-------------------|
| children | any | required | child components components, props are passed to children from MaterialTile |
| tileWidth | string | optional|set width for Tile component|
| tileHeight |string| optional| set height for Tile component|
| customCard | any | optional | a custom card if you do not want to use the default Card ( React Material UI Card Component ) or if you are using these components without React Material UI | 
| avatar | node | optional| a custom avatar to use in the header|
| noImageInHeader | boolean | optional | set set to true if you do not want the image from your tile displayed in left hand corner of card header, *default is false* | 
| name |string | optional | a unique identifier to assign to a tile for handling flex-box order, multiple controlled tiles, or state by uri | 
| src | string | required (if not using a custom avatar)| string for path to image for your avatar, right now the component only supports standard image formats, for svg add a custom avatar until this use case is supported |
| title |string| optional | title  shown in card header |
| subtitle |string| optional | subtitle shown in card header |
| cardStyle | object | optional | use this to overwrite inline styles for default material react Card
| cardHeaderStyle | object | optional | use this to overwrite inline styles for Card Header (Card Header is a custom sub component, it is *not* a react material ui component)|
| cardHeaderTitleStyle | object | optional | use this to overwrite inline styles for the title in card header |
| cardWidth |string | optional | adds width to via inline styles for Card  |
| cardHeight |string | optional | adds width to via Card inline style |
| overlay | in progress |  | this feature is not yet implemented |

#### MaterialTileFunctional
```
import { MaterialTileFunctional } from "react-material-tile"
```
It takes all of the same props as Material Tile with the addition of the following:

| prop name       | type | optional/required | description  |
| :-------------: |:---------:| :--------:|:-------------------|
| onClick | function | required | a function to control tile also applied to header of default Card |

#### MaterialTileGrid
```
import { MaterialTileGrid } from "react-material-tile"
```
🚧 This component is in progress. 

| prop name       | type | optional/required | description  |
| :-------------: |:---------:| :--------:|:-------------------|
| row | boolean | optional | specify if cards should be organized in a row, column is default |
🚧 documentation: in progress

#### MaterialTileRouted
🚧 This component is in progress and is not currently distributed as part of this package. Allows you to use your uri to determine open / closed state of tiles. It checks the 
url for a component's name and wheither or not it is active, it also works with nested tiles.


### Use with React Material UI or with a custom theme
Theming is optional, however, if you do decide to use a theme,
you can pass it to all Material Tile components by using the
ThemeProvider supplied by Styled components.

```
import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import { ThemeProvider } from "styled-components"

export class App extends Component {

	render() {
	    return <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
		     <ThemeProvider theme={ lightBaseTheme }>
		     	...
		     </ThemeProvider>	     
		   </MuiThemeProvider>
       }
}	     
```
### Use without React Material UI
🚧 documentation: in progress  
To use MaterialTile components without React Material UI, you would
just need to supply your own custom Card to MaterialTile or MaterialTileFunctional.

### Live Example
[kfitzi.io](https://kfitzi.io/projects)
