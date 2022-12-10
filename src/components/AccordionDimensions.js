const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow} from '@wordpress/components';
import { ColorPalette } from '@wordpress/block-editor';
import { __experimentalBoxControl as BoxControl, GradientPicker} from '@wordpress/components';
import PxColorBox from "./PxColorBox/PxColorBox.js"

export function AccordionDimensions({ attributes, setAttributes }){

    // let colorboxes = [
    //     {'name':'interfaceFGColor', 'title':'UI Foreground Color'},
    //     {'name':'interfaceBGColor', 'title':'UI Background Color'},
    //     {'name':'interfaceKeyColor', 'title':'UI Key Color'} 
    // ];

    if(attributes.styleMode=='disabled'){ return false; }
    // {(styleMode =='named' || styleMode =='custom') && (

    return (
    
			<Fragment>
				<PanelBody title={__("Dimensions", "pxblocks")} className="panel-dimensions" initialOpen={false}>
					  {/* <PanelRow> 
					  <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
							  <label htmlFor="heightenabled-form-toggle">{__("Height Enabled", "pxblocks")}</label>
							  <FormToggle
								  id="heightenabled-form-toggle"
								  label={__("Styles Enabled", "pxblocks")}
								  checked={heightEnabled}
								  onChange={toggleHeightEnabled}
							  />
						  </div>
					  </PanelRow>*/}
					  <PanelRow>
					  <div className="px-sidepanel px-sidepanel--grey">
						  <div className="px-simplerow px-simplerow--padtop px-simplerow--borderbottom px-simplerow--paddingcontrol">
							  <BoxControl 
								  label="Mobile Spacing"
								  values={attributes.spacingMobile}
								  sides={ [ 'top', 'bottom', 'left', 'right'  ] } 
								  resetValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  defaultValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  onChange={(newdata) => { setAttributes({ spacingMobile: newdata }); }} 
							  />
						  </div>
						  <div className="px-simplerow px-simplerow--borderbottom px-simplerow--marginbottom px-simplerow--margintop  px-simplerow--paddingcontrol">
							  <BoxControl 
								  label="Tablet Spacing (992+)"
								  values={attributes.spacingTablet}
								  sides={ [ 'top', 'bottom', 'left', 'right'  ] } 
								  resetValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  defaultValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  onChange={(newdata) => { setAttributes({ spacingTablet: newdata }); }} 
							  />
						  </div>
						  <div className="px-simplerow  px-simplerow--paddingcontrol">
							  <BoxControl 
								  label="Desktop Spacing (1200+)"
								  values={attributes.spacingDesktop}
								  sides={ [ 'top',  'bottom', 'left', 'right' ] } 
								  resetValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  defaultValues={ { top: '0', bottom: '0', left:'0', right:'0' }} 
								  onChange={(newdata) => { setAttributes({ spacingDesktop: newdata }); }} 
							  />
						  </div>
					  </div>
					  </PanelRow>
				</PanelBody> 
          </Fragment>
    );
}
