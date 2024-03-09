//  WordPress modules
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';


// Custom modules
import "./StyledPreview.scss";
import "../StyledTile/StyledTile.scss";
import calculated from "../../library/calculated/calculated";
import calculatedBGIMGSize from "../../library/calculated/calculatedBGIMGSize";
import calculatedBgPos from "../../library/calculated/calculatedBgPos";
import calculatedBGIMGAtt from "../../library/calculated/calculatedBGIMGAtt";
import calculatedBGIMGRepeat from "../../library/calculated/calculatedBGIMGRepeat";

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

		const arrayofEmpties = [];

		console.log(this.props.attributes);

		if(!headlineColor){
			arrayofEmpties.push(headlineColor);
		}

		console.log("empties", arrayofEmpties);
		/*
		this.props.attributes.forEach(function(currentValue, index, arr){
			console.log(currentValue);
		});
		*/


		const bgImageStack = calculated.calculatedBgImage(this.props.attributes);
		const bgSize = calculatedBGIMGSize(this.props.attributes, 'lg');
		const bgPosition = calculatedBgPos(this.props.attributes);
		const bgAttachment = calculatedBGIMGAtt(this.props.attributes);
		const bgRepeat = calculatedBGIMGRepeat(this.props.attributes);
		var showLabels = false;

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
				background-image: linear-gradient(transparent, transparent), url(${backgroundImage});
				background-size: ${bgSize};
				background-position: ${bgPosition};
				background-attachment: ${bgAttachment};
				background-repeat: ${bgRepeat};
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

					{/* <RangeControl
						disabled
						help="Please fill out all the attributes"
						initialPosition={0}
						label="Opacity"
						max={100}
						min={0}
					/> */}
				</div>
				<div className="px-sidepanel">
					<div className="px-simplerow px-simplerow--padbottom">
						{/* Styled Preview */}
						<div className={`styled-preview ${bgStackFirst=="gradient" ? "styled-preview--gradientfirst" : ""}`} data-viewtype="stack">
							<div className="cube">
								<div className="layer layer-1 fgtext textual">
									<label>Foreground</label>
									<h1>Headline</h1>
									<p>Text Ipsum Preview <a href="#">Link</a> halibut</p>
								</div>
								<div className={`layer layer-2 ${bgGelEnabled ? "fgcolor" : ""}`}><label>BG Gel</label></div>
								<div className={`layer layer-3 ${bgImageEnabled ? "bgimage" : ""}`}><label>BG Image</label></div>
								<div className={`layer layer-4 ${bgGradientEnabled ? "gradient" : ""}`}><label>Gradient</label></div>
								<div className={`layer layer-5 ${bgColorEnabled ? "base" : ""}`}><label>BG Base</label></div>
							</div>
						</div>

						<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
					</div>
				</div>
              
            </Fragment>
        );
    
	}
}
