/**
 *
 * Copyright © 2015-2016 Kayla Fitzsimmons, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { PropTypes } from "react"
import CardWrapper from "./card-wrapper"
import CardTextWrapper from "./card-text-wrapper"
import CardHeaderWrapper from "./card-header-wrapper"

const Stateless = (props) => {
	return (
		<CardWrapper uniqueKey={ props.uniqueKey }
               expanded={ props.expanded }
               tileClassName={ props.tileClassName }
               onExpandChange={ props.onExpandChange }
               initiallyExpanded={ props.initiallyExpanded }>
    <CardHeaderWrapper avatarSrc={ props.avatarSrc }
                       title={ props.title }
                       subtitle={ props.subtitle }
                       headerClassName={ props.headerClassName } />
    <CardTextWrapper name={ props.name }
                     childContainerClassName={ props.childContainerClassName }>
      { props.children }
    </CardTextWrapper>
  </CardWrapper>
	)
}

Stateless.propTypes = {
	children: PropTypes.node
}

export default Stateless
