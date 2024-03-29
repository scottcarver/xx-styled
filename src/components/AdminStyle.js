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
				spacingDesktop,
				styleMode
			},
			setAttributes,
			clientId
		} = this.props;

		
		var combinedCss = ` 
			/* For Admin */
			#block-${clientId} .paddingpreview{;
				top: ${spacingMobile.top};
				bottom: ${spacingMobile.bottom};
				left: ${spacingMobile.left};
				right: ${spacingMobile.right};
			}

			@media(min-width: 992px){
				#block-${clientId} .paddingpreview{;
					top: ${spacingTablet.top};
					bottom: ${spacingTablet.bottom};
					left: ${spacingTablet.left};
					right: ${spacingTablet.right};
				}
			}
			@media(min-width:1200px){
				#block-${clientId} .paddingpreview{;
					top: ${spacingDesktop.top};
					bottom: ${spacingDesktop.bottom};
					left: ${spacingDesktop.left};
					right: ${spacingDesktop.right};
				}
		
			}	
		`;

		
		// Remove Newlines, Tabs are spaces
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
		//  style={{position:'absolute',width:'100%',height:'100%', top:0, left:0, maxWidth:"none"}}

		// Return Nothing when this feature is disabled
		if(styleMode!="custom"){ return false; }

		// Return the Padding Preview
		return (
             <Fragment>
			    <div className='paddingpreview' style={{position:'absolute'}}>
                    <div style={{border:"dashed 1px currentColor",height:"100%",width:"100%",opacity:.2}}></div>
                </div>
				<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
            </Fragment>
		);
	}
}
