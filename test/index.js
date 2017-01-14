/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-08-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: index.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import React from "react"
import { test } from "ava"
import { mount, shallow } from "enzyme"
import { Stateless, Stateful } from "./../distribution/react-tilecard.js"
import { noop, renderJSX, JSX } from "jsx-test-helpers"

/*
Stateless Component PropTypes
    name: string,            - required prop
    uniqueKey: string,       - required prop
    expanded: bool,          - required prop
    onExpandChange: func,    - required prop
    initiallyExpanded: bool, - required prop
    avatarSrc: any,          - required prop

    title: string,
    subtitle: string,
    childContainerClassName: string,
    tileClassName: string,
    headerClassName: string,
    containerClassName: string,
    children: any
*/

test('Stateless: exists', t => {
	const expanded = false
	const wrapper = shallow(<Stateless expanded={ expanded }
                                    title="Example"
                                    avatarSrc="file.jpg"
                                    initiallyExpanded={ false }
                                    name="example"
                                    childContainerClassName="child-container"
                                    containerClassName="container"
                                    uniqueKey="example"
                                    onExpandChange={ () => {
                                                     } } />)
	t.truthy(wrapper.find(".childContainerClassName"))
})
