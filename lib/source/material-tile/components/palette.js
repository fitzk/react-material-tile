const palette = {
  primary1Color: (...args) => css`
      ${ css(...args) }
  `,
  handheld: (...args) => css`
		@media (max-width: 400px) {
			${ css(...args) }
		}
	`,
	iphone5:(...args) => css`
		@media (max-width: 325px) {
			${ css(...args) }
		}
	`,
	iphone6:(...args) => css`
		@media (max-width: 380px) {
			${ css(...args) }
		}
	`,
	safari: (...args) => css`
		@media (min-width: 375px) {
			${ css(...args) }
		}
	`,
	desktop: (...args) => css`
		@media (min-width: 768px) {
			${ css(...args) }
		}
	`,
}

export { palette }
import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

export default {
	spacing: spacing,
	fontFamily: "Courier",
	palette: {
		primary1Color: "#9E9E9E",
		primary2Color: "#616161",
		primary3Color: "#F5F5F5",
		accent1Color: "#FF5722",
		accent2Color: "#FFCCBC",
		accent3Color: "#E64A19",
		textColor: "#303030",
		secondaryTextColor: "black",
		alternateTextColor: "#303030",
		canvasColor: "#F5F5F5",
		borderColor: fade("#F5F5F5", 0.3),
		disabledColor: fade("#F5F5F5", 0.3),
		pickerHeaderColor: fade("#F5F5F5", 0.12),
		clockCircleColor: fade("#F5F5F5", 0.12),
	},
};
