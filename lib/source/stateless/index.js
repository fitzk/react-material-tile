/**
 *
 * Copyright © 2015-2016 Kayla Fitzsimmons, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from "react"
import { CardWrapper } from "./card-wrapper"
import { CardTextWrapper } from "./card-text-wrapper"
import { CardHeaderWrapper } from "./card-header-wrapper"

const Stateless = (props) => {

	return (
		<CardWrapper uniqueKey={ props.uniqueKey }
               expanded={ props.expanded }
               name={ props.name }
               containerClassName={ props.containerClassName }
               onExpandChange={ props.onExpandChange }
               initiallyExpanded={ props.initiallyExpanded }>
    <CardHeaderWrapper avatarSrc={ props.avatarSrc }
                       title={ props.title }
                       subtitle={ props.subtitle }
                       tileHeight={ props.tileHeight }
                       tileWeight={ props.tileWeight }
                       marginRight={ props.marginRight }
                       headerClassName={ props.headerClassName } />
    <CardTextWrapper name={ props.name }
                     textContainerClassName={ props.textContainerClassName }>
      { props.children }
    </CardTextWrapper>
  </CardWrapper>
	)
}

Stateless.propTypes = {
	children: React.PropTypes.any
}

export { Stateless }
