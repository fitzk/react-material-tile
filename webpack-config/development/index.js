/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: development.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { NamedModulesPlugin } from "webpack"
import _sourcemap from "./../utils/sourcemap"

const sourcemap = _sourcemap( 'eval-source-map' )

export default ( paths ) => ({
  entry: {
    tilecard: [
      "babel-polyfill",
      "react-hot-loader/patch", // Needed to preserve state on re-render as of 01/09/2017
      "webpack-dev-server/client?http://localhost:8080",
      paths.tilecard
    ]
  },
  sourcemap,
  performance: {
    hints: false
  },
  plugins: [
    new NamedModulesPlugin(),
    new DashboardPlugin(),
    new FriendlyErrorsWebpackPlugin( { clearConsole: true, } )
  ]
})
