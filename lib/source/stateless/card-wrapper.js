/**
 *
 * Copyright © 2015-2016 Kayla Fitzsimmons, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { PropTypes } from "react"
import Card from "material-ui/Card"

const CardWrapper = props => {
	return <div className={ props.containerClassName }
             key={ props.uniqueKey }>
          <Card expanded={ props.expanded }
                style={ { order: props.expanded ? 1 : -5 } }
                className={ props.expanded ? props.tileClassName : "tile animated fadeIn" }
                zDepth={ 0 }
                onExpandChange={ props.onExpandChange }
                initiallyExpanded={ props.initiallyExpanded }>
            { props.children }
          </Card>
        </div>
}

export default CardWrapper

CardWrapper.propTypes = {
	containerClassName: PropTypes.string,
	uniqueKey: PropTypes.string.isRequired,
	expanded: PropTypes.bool.isRequired,
	onExpandChange: PropTypes.func.isRequired,
	initiallyExpanded: PropTypes.bool.isRequired,
	children: PropTypes.node
}
