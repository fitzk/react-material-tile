/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-08-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: index.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import React from "react"
import { test } from "ava"
import Stateless from "./../source/components/stateless"
import { noop, renderJSX, JSX } from "jsx-test-helpers"

test( "CardTextWrapper: child continer className is set when passed as props", t => {
  const click = () => {
    alert( 'boo!' )
  }
  t.truthy(
    <Stateless name="test" uniqueKey="test" expanded={ true } onExpandChange={ click } initiallyExpanded={ true } avatarSrc="" /> )
} )
