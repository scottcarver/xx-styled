const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow} from '@wordpress/components';
import ColorBox from "./ColorBox.js"

export function AccordionInterface({ attributes, setAttributes }){

    let colorboxes = [
        {'id':'fgcolor', 'label':'UI Foreground Color', 'target':'interfaceFGColor'},
        {'id':'bgcolor', 'label':'UI Background Color', 'target':'interfaceBGColor'},
        {'id':'keycolor', 'label':'UI Key Color', 'target':'interfaceKeyColor'}
    ];
    
    // don't show the control when it is disabled, or a named styled
    if(attributes.styleMode=='disabled' || attributes.styleMode=='named'){ return false; }

    return (
        <Fragment>
            <PanelBody title={__("Interface", "pxblocks")} className="panel-interface" initialOpen={false}>
                <PanelRow>
                    <div className="px-sidepanel">
              
                        {/* Add as a Component */}
                        {colorboxes.map((currentValue) => {  
                            return( 
                                <ColorBox 
                                    label={currentValue.label}
                                    id={currentValue.id}
                                    target={currentValue.target}
                                    attributes={attributes} 
                                    setAttributes={setAttributes}
                                    key={currentValue.id}
                                /> 
                            )
                        })}
                    </div>
                    
                </PanelRow>
            </PanelBody> 
        </Fragment>
    );
}
