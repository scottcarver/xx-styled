const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow} from '@wordpress/components';
import { __experimentalBoxControl as BoxControl} from '@wordpress/components';

export function AccordionDimensions({ attributes, setAttributes }){

	// Return nothing when the styleMode is disabled
    if(attributes.styleMode=='disabled'){ return false; }

    return (
		<Fragment>
			<PanelBody title={__("Dimensions", "pxblocks")} className="panel-dimensions" initialOpen={false}>
				<PanelRow>
					<div className="px-sidepanel px-sidepanel--grey">
						<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--borderbottom px-simplerow--paddingcontrol">
							<BoxControl 
								label="Mobile Spacing"
								values={attributes.spacingMobile}
								sides={ [ 'top', 'bottom', 'left', 'right'  ] } 
								defaultValues={''}
								resetValues={''}
								onChange={(newdata) => { setAttributes({ spacingMobile: newdata }); }} 
							/>
						</div>
						<div className="px-simplerow px-simplerow--borderbottom px-simplerow--padbottom  px-simplerow--marginbottom px-simplerow--margintop  px-simplerow--paddingcontrol">
							<BoxControl 
								label="Tablet Spacing (992+)"
								values={attributes.spacingTablet}
								sides={ [ 'top', 'bottom', 'left', 'right'  ] } 
								defaultValues={''} 
								resetValues={''}
								onChange={(newdata) => { setAttributes({ spacingTablet: newdata }); }} 
							/>
						</div>
						<div className="px-simplerow  px-simplerow--paddingcontrol">
							<BoxControl 
								label="Desktop Spacing (1200+)"
								values={attributes.spacingDesktop}
								sides={ [ 'top',  'bottom', 'left', 'right' ] } 
								defaultValues={''} 
								resetValues={''}
								onChange={(newdata) => { setAttributes({ spacingDesktop: newdata }); }} 
							/>
						</div>
					</div>
				</PanelRow>
			</PanelBody> 
		</Fragment>
    );
}
