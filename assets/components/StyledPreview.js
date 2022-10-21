/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

// Node modules
import classnames from "classnames";

/*  Internal block libraries */
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import "./styled-preview.scss";
import "./styled-tile.scss";
import calculatedBgImage from "./../lib/js/calculatedBgImage";
import calculatedGradient from "./../lib/js/calculatedGradient";

/* Create a Block Controls wrapper Component */
export default class StyledPreview extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() { }
	render() {
		const {
			positionVert,
			attributes: {
				bgColorEnabled,
				bgGradientEnabled,
				bgImageEnabled,
				bgGelEnabled,
				foregroundColor,
				headlineColor,
				linkColor,
				backgroundColor,
				backgroundColor3,
				backgroundImage,
				backgroundStackFirst,
				foregroundHeadlineFont,
				foregroundCopyFont,
				foregroundCaptionFont
			},
			setAttributes
		} = this.props;

		const bgImageStack = calculatedBgImage(this.props.attributes);
		var combinedCss = ` 
			.fgtext{
				color: ${foregroundColor};
				font-family: ${foregroundCopyFont}
			}
			.fgtext h1{
				color: ${headlineColor};
				font-family: ${foregroundHeadlineFont}
			}
			.fgtext p{
				color: ${foregroundColor};
				
			}
			.fgtext a{
				color: ${linkColor};
			}
			.fgcolor{
				background: ${backgroundColor3};
				// outline: solid 1px red;
			}
			.bgimage{
				background-image: url(${backgroundImage});
			}
			.gradient{
				background: ${calculatedGradient(this.props.attributes)};
			}
			.base{
				background: ${backgroundColor};
			}
		`;
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
		
        return (
            <Fragment>
				<div className="px-sidepanel">
					<div className="px-simplerow px-simplerow--padleft px-simplerow--padtop px-simplerow--padbottom">
						<strong>Preview:</strong>
					</div>
				</div>
				<div className="px-sidepanel">
					<div className="px-simplerow px-simplerow--padbottom">
						{/* Styled Preview */}
						<div className={`styled-preview ${backgroundStackFirst=="gradient" ? "styled-preview--gradientfirst" : ""}`} data-viewtype="stack">
							<div className="cube">
								<div className="layer layer-1 fgtext textual">
									<h1>Foreground Text</h1>
									<p>Lorem Ipsum Preview <a href="#">Stuffs</a> halibut</p>
								</div>
								<div className={`layer layer-2 ${bgGelEnabled ? "fgcolor" : ""}`}></div>
								<div className={`layer layer-3 ${bgImageEnabled ? "bgimage" : ""}`}></div>
								<div className={`layer layer-4 ${bgGradientEnabled ? "gradient" : ""}`}></div>
								<div className={`layer layer-5 ${bgColorEnabled ? "base" : ""}`}></div>
							</div>
						</div>

						<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
					</div>
				</div>
              
            </Fragment>
        );
    
	}
}
