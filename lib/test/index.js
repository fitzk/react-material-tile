import "jsdom-global/register";
import React, { Component, PropTypes } from "react"
import { test } from "ava"
import { mount, shallow } from "enzyme"
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { ThemeProvider } from "styled-components"
import { MaterialTile } from "./../source/material-tile"

test("MaterialTile: exists", t => {
	const muiTheme = getMuiTheme(darkBaseTheme);
	const wrapper = mount(
		<ThemeProvider theme={ muiTheme }>
    <MaterialTile title="Tile Card"
              subtitle="a component"
              tileHeight="200px"
              tileWidth="200px"
              name="name" />
  </ThemeProvider>)
	t.truthy(wrapper.exists())
});
