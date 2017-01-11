/**
 *
 * Copyright © 2015-2016 Kayla Fitzsimmons, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { PropTypes } from "react"
import { CardWrapper, CardHeaderWrapper, CardTextWrapper } from "./wrapper-components"

const Stateless = (props) => {
  return (
    <CardWrapper
    uniqueKey={props.uniqueKey }
    expanded={ props.expanded }
    tileClassName={ props.tileClassName }
    onExpandChange={ props.onExpandChange }
    initiallyExpanded={ props.initiallyExpanded }>
      <CardHeaderWrapper
    avatarSrc={ props.avatarSrc }
    title={ props.title }
    subtitle={ props.subtitle }
    headerClassName={ props.headerClassName } />
      <CardTextWrapper
    name={ props.name }
    childContainerClassName={ props.childContainerClassName }>
        { props.children }
      </CardTextWrapper>
    </CardWrapper>
  )
}

Stateless.propTypes = {
  name: PropTypes.string.isRequired,
  uniqueKey: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onExpandChange: PropTypes.func.isRequired,
  initiallyExpanded: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatarSrc: PropTypes.any.isRequired,
  childContainerClassName: PropTypes.string,
  tileClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.any
}
export { Stateless }
