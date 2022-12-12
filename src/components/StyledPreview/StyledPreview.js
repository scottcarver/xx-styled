//  WordPress modules
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
// Custom modules
import "./StyledPreview.scss";
import "../StyledTile/StyledTile.scss";
import calculated from "../../library/calculated/calculated";


/* Create a Block Controls wrapper Component */
export default class StyledPreview extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() { }
	render() {
		const {
			attributes: {
				bgColorEnabled,
				bgGradientEnabled,
				bgImageEnabled,
				bgGelEnabled,
				foregroundColor,
				headlineColor,
				linkColor,
				backgroundColor,
				backgroundGel,
				backgroundImage,
				bgStackFirst,
				fgHeadlineFont,
				fgCopyFont,
				styleMode
			}
		} = this.props;

		const bgImageStack = calculated.calculatedBgImage(this.props.attributes);
		var combinedCss = ` 
			.fgtext{
				color: ${foregroundColor};
				font-family: ${fgCopyFont}
			}
			.fgtext h1{
				color: ${headlineColor};
				font-family: ${fgHeadlineFont}
			}
			.fgtext p{
				color: ${foregroundColor};
				
			}
			.fgtext a{
				color: ${linkColor};
			}
			.fgcolor{
				background: ${backgroundGel};
				// outline: solid 1px red;
			}
			.bgimage{
				background-image: url(${backgroundImage});
			}
			.gradient{
				background: ${calculated.calculatedGradient(this.props.attributes)};
			}
			.base{
				background: ${backgroundColor};
			}
		`;
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
		
		// don't show the control when it is disabled, or a named styled
		if(styleMode !== 'custom'){ return false; }

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
						<div className={`styled-preview ${bgStackFirst=="gradient" ? "styled-preview--gradientfirst" : ""}`} data-viewtype="stack">
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
