import React, { Component, PropTypes } from "react"
import { ThemeProvider } from "styled-components"
//===|^|===|^|===|^|===|^|===|^|===|^|===>
//===|^|===|^|===|^|===|^|===|^|===|^|===========>
//===|^|===|^|===|^|===|^|===|^|===|^|====>

const MaterialThemeProvider = (props) => {

	return <ThemeProvider theme={ props.theme }>
          { props.children }
        </ThemeProvider>
}
export { MaterialThemeProvider }
