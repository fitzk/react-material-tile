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

import TileCard, { Stateless } from "./../source/index.js"

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

test('Stateless: Renders child div', t => {

  const wrapper = shallow(
    <Stateless name="test"
      uniqueKey="test-0" expanded={false}
      initiallyExpanded={false}
      onExpandChange={()=>{}}
      avatarSrc={"some.png"}
      >
      <div>I am a div</div>
    </Stateless>)
  t.is(wrapper.contains( <div>I am a div</div>), true)
})
//
// test('mount', t => {
//   const wrapper = mount(<Foo />)
//   const fooInner = wrapper.find('.foo-inner')
//   t.is(fooInner.is('.foo-inner'), true)
// })
