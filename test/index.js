import React from "react"
import { test } from "ava"
import { mount, shallow } from "enzyme"
import TileCard from "./../distribution/react-tilecard.js"
import { noop, renderJSX, JSX } from "jsx-test-helpers"


test('TileCard: exists', t => {
	const expanded = false
	const onExpandChange = () => true
	const wrapper = shallow(<TileCard showAvatarOnExpand
                                   title="Tile Card"
                                   subtitle={ "a React Component" }
                                   initiallyExpanded={ false }
                                   cardClassName
                                   headerClassName
                                   tileWidth
                                   tileHeight
                                   avatarWidth
                                   avatarHeight
                                   name="name">
                           <div>
                             Hello
                           </div>
                         </TileCard>)
	t.truthy(wrapper.exists())
})
