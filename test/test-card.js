import "jsdom-global/register";
import React, { Component, PropTypes } from "./../node_modules/react"
import { test } from "ava"

import styled from "styled-components"
import { mount, shallow } from "enzyme"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"

import { Card } from "./dist/card"
import { getStyleProps } from "./utils"

test("Card style defaults to { width: '50vw', height: '50vh' }", t => {
	const muiTheme = getMuiTheme(darkBaseTheme);
	const wrapper = shallow(<Card title="Tile Card"
											              subtitle="a component"
											              tileHeight="200px"
											              tileWidth="200px"
											              name="card">
													<div/>
												</Card>, {  muiTheme: muiTheme });
		let cardStyle = getStyleProps(wrapper);
		let style = { width: '50vw', height: '50vh' };
		t.deepEqual(cardStyle, style)
});
