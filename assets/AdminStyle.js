/* Internal block libraries */
const { __ } = wp.i18n;
import { Component } from '@wordpress/element';
import { Fragment } from '@wordpress/element';

export default class AdminStyle extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: {
				blockID,
				spacingMobile,
				spacingTablet,
				spacingDesktop
			},
			setAttributes
		} = this.props;

		var combinedCss = ` 
			/* For Admin */
			.wp-block-xx-styled--${blockID} .badoop{
				padding: ${spacingMobile.top} ${spacingMobile.right} ${spacingMobile.bottom} ${spacingMobile.left};
			}
			@media(min-width: 992px){
				.wp-block-xx-styled--${blockID} .badoop{ 
					padding: ${spacingTablet.top} ${spacingTablet.right} ${spacingTablet.bottom} ${spacingTablet.left};
				}
				.wp-block-xx-styled--${blockID} .subbadoop{
					border-color:pink;
				}
			}
			@media(min-width:1200px){
				.wp-block-xx-styled--${blockID} .badoop{ 
					padding: ${spacingDesktop.top} ${spacingDesktop.right} ${spacingDesktop.bottom} ${spacingDesktop.left};
				}
				.wp-block-xx-styled--${blockID} .subbadoop{
					border-color:yellow;
				}
			}	
		`;
		
		// Remove Newlines, Tabs are spaces
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();

		return (
             <Fragment>
			    <div className='badoop' style={{position:'absolute',width:'100%',height:'100%', top:0, left:0, maxWidth:"none"}}>
                    <div className='subbadoop' style={{border:"dashed 1px currentColor",height:"100%",opacity:.2}}></div>
                </div>
				<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
            </Fragment>
		);
	}
}
